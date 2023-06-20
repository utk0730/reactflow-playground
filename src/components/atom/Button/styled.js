import styled from "styled-components";
export const StyledButton = styled.button`
  text-align: center;
  background: ${(props) => (props.bgColor ? props.bgColor : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
`;
