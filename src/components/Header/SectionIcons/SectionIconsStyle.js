import styled from "styled-components";
// ----- COLORS ----- //
import { darkBlue, darkerGray } from "../../../constants";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  a {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    color: ${darkBlue};
    span {
      display: inline-block;
      margin-left: 10px;
      font-size: 17px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${darkBlue};
        animation: border 0.4s;
        transition: ease 0.4s;
        display: none;
      }
      @keyframes border {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
      &:hover {
        :after {
          display: block;
        }
      }
    }
  }
  .priceBorder {
    border-left: 1px solid ${darkerGray};
    border-right: 1px solid ${darkerGray};
    padding: 0 130px;
  }
`;
