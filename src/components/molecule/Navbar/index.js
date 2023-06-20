import React from "react";
import { StyledNav } from "./styled";
function NavBar(props) {
  return <StyledNav>{props.children}</StyledNav>;
}

export default NavBar;
