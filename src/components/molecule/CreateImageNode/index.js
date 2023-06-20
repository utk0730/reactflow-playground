import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { StyledCreateImageNodeBtn } from "./styled";
function CreateImageNodeAction(props) {
  return (
    <StyledCreateImageNodeBtn {...props}>
      <BiMessageSquareDetail />
      <p>Upload Image (WIP)</p>
    </StyledCreateImageNodeBtn>
  );
}

export default CreateImageNodeAction;
