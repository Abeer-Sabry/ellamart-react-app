import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue } from "../../constants";

export const HeaderWrapper = styled.div`
  background-color: ${darkBlue};
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;
  /* overflow: hidden; */
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
