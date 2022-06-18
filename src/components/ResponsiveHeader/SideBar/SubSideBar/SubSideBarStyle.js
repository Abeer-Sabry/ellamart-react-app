import styled from "styled-components";
import { darkBlue, Gray } from "../../../../constants";

export const SubNavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;

  h2 {
    background-color: ${Gray};
    text-align: center;
    text-transform: capitalize;
    padding: 5px 0;
  }

  @keyframes moveSubBar {
    0% {
      transform: translateX(-400px);
      z-index: 100;
    }
    100% {
      transform: translateX(-0px);
    }
  }
`;
