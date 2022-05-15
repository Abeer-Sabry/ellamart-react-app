import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { darkGray, Gray, lightBlue, lightYellow, Red } from "../../../constants";
import { AiFillStar } from "react-icons/ai";
export const ItemWrapper = styled.div`
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

  p {
    margin-bottom: 10px;
  }
  p.title {
    min-height: 60px;
  }
  p.percentage-price {
    font-size: 13px;
    del {
      font-size: 13px;
      margin: 0 3px;
    }
    span {
      font-size: 15px;
      font-weight: bold;
      color: ${Red};
      margin-left: 2px;
    }
  }
  div {
    display: inline-block;
    position: relative;
    font-size: 15px;
    color: ${lightYellow};
  }
  div.colorCircles {
    margin-bottom: 10px;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
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
    cursor: pointer;
    font-size: 14px;
    transition: ease-out 0.2s;
    &:hover {
      border: 1px solid ${lightBlue};
      background-color: ${lightBlue};
      color: white;
    }
  }
`;
