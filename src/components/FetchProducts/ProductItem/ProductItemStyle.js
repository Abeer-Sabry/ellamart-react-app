import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { darkGray, lightBlue, lightYellow, Red } from "../../../constants";

export const ItemWrapper = styled.div`
  display: ${props => (props.view ? "block" : "grid")};
  grid-template-columns: 5fr 7fr;
  grid-column-gap: 40px;
  align-items: center;

  div.imgDiv {
    position: relative;
    &:hover {
      button.view {
        display: block;
      }
    }
    img {
      transition: ease 0.3s;
    }
    button.view {
      background-color: white;
      color: black;
      border: none;
      padding: 5px 15px;
      border-radius: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }
  div.infoDiv {
    p.title {
      min-height: ${props => (props.view ? "50px" : "")};
      font-size: ${props => (props.view ? "15px" : "18px")};
    }
    p.percentage-price {
      font-size: ${props => (props.view ? "13px" : "20px")};
      margin-bottom: 12px;

      del {
        font-size: ${props => (props.view ? "13px" : "16px")};
        margin: 0 3px;
      }
      span {
        font-size: ${props => (props.view ? "15px" : "20px")};
        font-weight: bold;
        color: ${Red};
        margin-left: 2px;
      }
    }
    p.defaultPrice {
      font-size: ${props => (props.view ? "15px" : "18px")};
      margin-bottom: 12px;
    }
    .ant-rate {
      margin-bottom: 7px;
    }
    /* div {
      display: inline-block;
      position: relative;
      font-size: 15px;
      color: ${lightYellow};
    } */
    div.colorCircles {
      margin-bottom: 10px;
      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 5px;
        position: relative;
        &.active {
          border: 1.5px solid black;
        }
        &:hover {
          .colorName {
            display: block;
          }
        }
      }
      .colorName {
        content: "";
        position: absolute;
        top: -25px;
        left: -15px;
        color: white;
        background-color: black;
        border-radius: 5px;
        font-size: 12px;
        padding: 3px 7px;
        display: none;
      }
    }
    button.cartBtn {
      border: 1px solid ${darkGray};
      background-color: white;
      border-radius: 17px;
      padding: 8px 60px;
      text-transform: capitalize;
      display: block;
      cursor: pointer;
      font-size: 14px;
      transition: ease-out 0.2s;
      &:hover {
        border: 1px solid ${lightBlue};
        background-color: ${lightBlue};
        color: white;
      }
    }
    @media only screen and (max-width: 720px) {
      text-align: center;
      .divCart {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
