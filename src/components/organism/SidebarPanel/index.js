import React from "react";

import CreateMsgNodeAction from "../../molecule/CreateMessageNode";
import CreateImageNodeAction from "../../molecule/CreateImageNode";
import TextArea from "../../atom/TextArea";
import { StyledSidebarPanel } from "./styled";
const onDragStartHandler = (event, nodeType, content) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.setData("content", content);
  event.dataTransfer.effectAllowed = "move";
};

const SidebarPanel = ({ selectedNode, nodeName, setNodeName, textAreaRef }) => {
  console.log("selected node --->", selectedNode);
  return (
    <StyledSidebarPanel>
      {selectedNode ? (
        <TextArea
          label="Enter your message"
          textAreaRef={textAreaRef}
          value={nodeName ?? ""}
          onChange={setNodeName}
        />
      ) : (
        <CreateMsgNodeAction
          onDragStart={(event) => onDragStartHandler(event, "node", "message")}
          draggable
        >
          Message
        </CreateMsgNodeAction>
      )}

      <CreateImageNodeAction
        onDragStart={(event) => {
          onDragStartHandler(event, "node", "image");
        }}
        draggable={false}
      >
        Image uploader (Coming soon)
      </CreateImageNodeAction>
    </StyledSidebarPanel>
  );
};
export default SidebarPanel;
