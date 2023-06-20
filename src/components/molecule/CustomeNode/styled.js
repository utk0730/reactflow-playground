import styled from "styled-components";
export const StyledCustomNode = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.selected
      ? "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};
  border: 0px solid #bbb;
  fontsize: 12px;
  border-radius: 6px;
  max-width: 200px;
  text-align: center;
  background-color: white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 10px;
`;

export const CustomNodeDeleteIcon = styled.div`
  position: absolute;
  top: -6px;
  right: -3px;
  cursor: pointer;
`;
export const CutomNodeTitle = styled.div`
  padding: 10px;
  background-color: #b2eee4;
  border-radius: 10px;
`;

export const CutomNodeContent = styled.div`
  padding: 10px 6px;
  max-width: 200px;
  min-height: 40px;
`;
