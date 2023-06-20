import React, { useCallback, useEffect, useState, useRef } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from "reactflow";
import { find, cloneDeep } from "lodash";
import SidebarPanel from "../../components/organism/SidebarPanel";
import CustomNode from "../../components/molecule/CustomeNode/Index";
import NavBar from "../../components/molecule/Navbar";
import { initialEdges, initialNodes } from "../../utils/constants";
import { FlowbuilderWrapper, ReactFlowWrapper } from "./styled";
import { v4 as uuidv4 } from "uuid";
import { isValidNodeNetwork } from "../../utils/helper.functions";
import { useSnackbar } from "react-simple-snackbar";
const nodeTypes = { node: CustomNode };

const snackBaroptions = {
  position: "top-right",
  style: {
    backgroundColor: "white",
    color: "blue",
    fontSize: "14px",
    textAlign: "center",
  },
  closeStyle: {
    color: "blue",
    fontSize: "16px",
  },
};

const onDragOverHandler = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

const FlowBuilder = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar(snackBaroptions);
  const [nodeName, setNodeName] = useState("Node 1");
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const reactFlowWrapper = useRef(null);
  const textAreaRef = useRef(null);

  const onInitHandler = (reactFlowInstance) =>
    setReactFlowInstance(reactFlowInstance);

  const onDropHandler = (event) => {
    event.preventDefault();
    const reactFlowWrapperRectBounds =
      reactFlowWrapper.current.getBoundingClientRect();
    const uniqueNodeId = uuidv4();
    const newNode = {
      id: uniqueNodeId,
      type: event.dataTransfer.getData("application/reactflow"),
      position: reactFlowInstance.project({
        x: event.clientX - reactFlowWrapperRectBounds.left,
        y: event.clientY - reactFlowWrapperRectBounds.top,
      }),
      data: {
        heading: "Send Message",
        content: event.dataTransfer.getData("content"),
        onDeleteNodeById: () => deleteNodeById(uniqueNodeId),
      },
    };
    setNodes((nodes) => nodes.concat(newNode));
    setSelectedNode(newNode);
  };
  const onConnectHandler = useCallback(
    (params) =>
      setEdges((edges) =>
        addEdge({ ...params, markerEnd: { type: "arrowclosed" } }, edges)
      ),
    [setEdges]
  );

  // check for node selection
  useEffect(() => {
    const selectedNode = find(nodes, { selected: true });
    if (selectedNode) {
      setSelectedNode(selectedNode);
    } else {
      setSelectedNode(null);
    }
  }, [nodes]);

  useEffect(() => {
    setNodeName(selectedNode?.data?.content || "");
    textAreaRef?.current?.focus();
  }, [selectedNode]);

  useEffect(() => {
    setNodes((nodes) =>
      nodes.map((node) => {
        const updatedNode = cloneDeep(node);
        if (node.id === selectedNode?.id) {
          updatedNode.data = {
            ...updatedNode.data,
            content: nodeName || "",
          };
        }
        return updatedNode;
      })
    );
  }, [nodeName, setNodes]);

  const saveNodesHandler = () => {
    if (isValidNodeNetwork(nodes, edges)) {
      openSnackbar("Valid node network", 3000);
      return;
    }
    openSnackbar(
      "Flow can not be saved, Please connect all nodes correctly ",
      3000
    );
  };

  const deleteNodeById = (id) => {
    console.log("deleteNodeById", id);
    reactFlowInstance.setNodes((nds) => nds.filter((node) => node.id !== id));
    setSelectedNode(null);
  };

  return (
    <>
      <NavBar>
        <button onClick={saveNodesHandler}>Save</button>
      </NavBar>
      <FlowbuilderWrapper>
        <ReactFlowProvider>
          <ReactFlowWrapper ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onInit={onInitHandler}
              onConnect={onConnectHandler}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onDragOver={onDragOverHandler}
              onDrop={onDropHandler}
            >
              <Background color="#aaa" gap={20} />
            </ReactFlow>
          </ReactFlowWrapper>

          <SidebarPanel
            selectedNode={selectedNode}
            textAreaRef={textAreaRef}
            nodeName={nodeName}
            setNodeName={setNodeName}
            deleteNodeById={deleteNodeById}
          />
        </ReactFlowProvider>
      </FlowbuilderWrapper>
    </>
  );
};

export default FlowBuilder;
