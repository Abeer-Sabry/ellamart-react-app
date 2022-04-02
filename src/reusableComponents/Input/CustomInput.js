import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { Input, InputWrapper } from "./CustomInputStyle";

const CustomInput = props => {
  return (
    <InputWrapper>
      {" "}
      <Input placeholder={props.placeholder} />
      {<span>{props.icon}</span>}
    </InputWrapper>
  );
};

export default CustomInput;
