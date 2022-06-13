import styled from "styled-components";
// ----- COLORS ----- //
import { darkBlue, darkerGray } from "../../../constants";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 15px 0;
  a {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    color: ${darkBlue};
    width: 100%;
    :nth-child(2) {
      justify-content: center;
    }
    :nth-child(3) {
      justify-content: flex-end;
    }
    span {
      display: inline-block;
      margin-left: 10px;
      font-size: 15px;
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
    /* ---- Responsive ----  */
    @media only screen and (max-width: 1760px) {
      svg {
        font-size: 22px;
      }
    }
    @media only screen and (max-width: 980px) {
      flex-direction: column;
      svg {
        margin-bottom: 5px;
        font-size: 18px;
      }
      span {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 780px) {
      svg {
        font-size: 15px;
      }
      span {
        font-size: 12px;
      }
    }
    @media only screen and (max-width: 780px) {
      svg {
        font-size: 22px;
      }
      span {
        display: none;
      }
    }
  }
  .priceBorder {
    border-left: 1px solid ${darkerGray};
    border-right: 1px solid ${darkerGray};
  }
`;
