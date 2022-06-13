import styled from "styled-components";

export const SubNavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;

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
