import styled from "styled-components";

export const DropDownWrap = styled.div`
  .sideNavContainer {
    height: 0;
    transition: height 0.3s;
    transform-origin: left center;
  }
  .dropdownRow {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    cursor: pointer;
    padding: 0 20px;
    .seeAll {
      font-size: 15px;
      margin: 10px 0;
    }
  }
  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
`;
