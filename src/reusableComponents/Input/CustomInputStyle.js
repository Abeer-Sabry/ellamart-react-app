import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue } from "../../constants";

export const Input = styled.input`
  background-color: white;
  border-radius: 22px;
  border: none;
  padding: 14px 0;
  padding-left: 20px;
  width: 100%;
`;
export const InputWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -40%);
    color: ${darkBlue};
    font-size: 25px;
  }
`;
