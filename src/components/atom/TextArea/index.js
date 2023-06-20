import { StyledTextArea } from "./styled";
import React from "react";

function TextArea({ label, value, onChange, textRef }) {
  return (
    <StyledTextArea>
      {label && <label>{label}</label>}
      <textarea
        // rows="4"
        // cols="20"
        ref={textRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </StyledTextArea>
  );
}

export default TextArea;
