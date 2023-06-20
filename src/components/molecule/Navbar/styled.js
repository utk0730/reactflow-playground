import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 60px;
  background: lightgray;
  display: flex;
  justify-content: end;
  align-items: center;
  & button {
    width: 100px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid blue;
    margin-right: 100px;
  }
`;
