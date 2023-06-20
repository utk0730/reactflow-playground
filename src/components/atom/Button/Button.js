import React from "react";
import { StyledButton } from "./styled";
function CustomBtn({ bgColor, txtColor, icon, title }) {
  return (
    <StyledButton bgColor={bgColor} txtColor={txtColor}>
      <p>{title}</p>
      <img src={icon} alt="icon" />
    </StyledButton>
  );
}

export default CustomBtn;
