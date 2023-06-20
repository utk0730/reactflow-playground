import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { StyledCreateMsgNodeBtn } from "./styled";
function CreateMsgNodeAction(props) {
  return (
    <StyledCreateMsgNodeBtn {...props}>
      <BiMessageSquareDetail />
      <p>Message</p>
    </StyledCreateMsgNodeBtn>
  );
}

export default CreateMsgNodeAction;
