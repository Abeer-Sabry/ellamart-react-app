import styled from "styled-components";

export const SideBarWrapper = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 350px;
  z-index: 100;
  overflow-y: scroll;
  transform-origin: left center;
  transform: translateX(-350px);
  padding-bottom: 10px;
  /* --- Animation-Expand-The-Entire-SideBar-OutWards --- */
  @keyframes moveSideBar {
    0% {
      transform: translateX(-400px);
      z-index: 100;
    }
    100% {
      transform: translateX(-0px);
    }
  }
`;
