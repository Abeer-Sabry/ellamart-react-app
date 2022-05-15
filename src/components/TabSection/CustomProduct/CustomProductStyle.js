import styled from "styled-components";
// ----- CONSTANT-COLORS ----- //
import { darkGray } from "../../../constants";

export const Wrapper = styled.div`
  p {
    color: ${darkGray};
  }
  p.description {
    margin-bottom: 30px;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    span {
      display: inline-block;
      width: 180px;
      font-size: 15px;
    }
    p {
      font-size: 14px;
    }
  }
`;
