import styled from "styled-components";

export const ResHeaderWrap = styled.div`
  display: none;
  div {
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    grid-column-gap: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }
  div.logoImg {
    display: flex;
    justify-content: center;
    img {
      width: 150px;
    }
  }
  svg {
    font-size: 30px;
  }
  .cart {
    text-align: right;
    a {
      color: black;
    }
  }
  @media only screen and (max-width: 1200px) {
    display: block;
  }
  @media only screen and (max-width: 475px) {
    grid-template-columns: 4fr 4fr 4fr;
    div.logoImg {
      img {
        width: 120px;
      }
    }
    .cart {
      div {
        width: 12px;
      }
    }
  }
`;
export const OverlayDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  /* --- Animation-Expand-The-Existence-SideBar-OutWards --- */
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const CloseNav = styled.div`
  position: absolute;
  top: 10px;
  left: 370px;
  z-index: 999;
  font-size: 28px;
  color: white;
  z-index: 75;

  /* --- Animation-Responsible-For-OverlayDiv-and-CloseIcon  --- */
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
