import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { darkGray } from "../../../constants";

export const Wrapper = styled.div`
  h5 {
    margin-bottom: 10px;
    font-weight: bold;
  }
  p {
    margin-bottom: 20px;
    color: ${darkGray};
    @media only screen and (max-width: 801px) {
      font-size: 13px;
    }
    @media only screen and (max-width: 601px) {
      font-size: 11.5px;
    }
  }
`;
