import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { darkGray, Gray, lightYellow } from "../../constants";
// ----- TAB-SECTION ----- //
export const TabTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Gray};
  padding-top: 15px;
  margin-bottom: 40px;
  div {
    display: flex;
    align-items: center !important;
    color: ${darkGray};
    text-align: center;
    margin-right: 25px;
    span {
      margin-right: 10px;
      font-size: 18px;
    }
    p {
      font-size: 17px;
    }
    &.active {
      background-color: white;
      margin-right: 15px;
      padding: 7px 15px;
      span {
        color: ${lightYellow};
      }
      p {
        border-bottom: 2px solid ${lightYellow};
        padding-bottom: 5px;
        color: black;
      }
    }
  }
`;
export const CustomerCareWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 70px;
  align-items: center;
  margin-bottom: 50px;
  .expert {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Gray};
    padding: 15px 40px;
    border-radius: 50px;
    width: 90%;
    div.expertImg {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        margin-right: 15px;
      }
      p {
        font-size: 13px;
      }
    }
    button {
      text-align: right;
      background-color: ${lightYellow};
      border: none;
      border-radius: 40px;
      padding: 5px 13px;
      font-size: 15px;
      text-transform: capitalize;
    }
  }
  .logos {
    img {
      width: 60%;
    }
  }
`;
