import React, { memo } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Handle, Position } from "reactflow";
import {
  StyledCustomNode,
  CutomNodeTitle,
  CutomNodeContent,
  CustomNodeDeleteIcon,
} from "./styled";
const CustomNode = (props) => {
  const { data, selected, id } = props;
  const { onDeleteNodeById } = data;

  return (
    <StyledCustomNode selected={selected}>
      {/* harcoded nodes are not deletable */}
      {id !== "1" && id !== "2" && selected ? (
        <CustomNodeDeleteIcon
          onClick={(e) => {
            e.preventDefault();
            onDeleteNodeById && onDeleteNodeById(id);
            console.log("delete node", id);
          }}
        >
          <BiTrashAlt />
        </CustomNodeDeleteIcon>
      ) : null}
      <CutomNodeTitle>
        {data.heading}
        <AiOutlineWhatsApp style={{ paddingLeft: "10px" }} />
      </CutomNodeTitle>
      <CutomNodeContent>{data.content}</CutomNodeContent>
      <Handle type="source" position={Position.Right} id="b" />
      <Handle type="target" position={Position.Left} id="a" />
    </StyledCustomNode>
  );
};

export default memo(CustomNode);
