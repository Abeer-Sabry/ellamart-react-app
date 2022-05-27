import styled from "styled-components";
// ----- CONSTANT-COLORS ----- //
import { darkGray } from "../../../constants";

export const Wrapper = styled.div`
  p {
    color: ${darkGray};
  }
  p.description {
    margin-bottom: 30px;
    @media only screen and (max-width: 626px) {
      font-size: 12px;
    }
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    span {
      display: inline-block;
      width: 180px;
      font-size: 15px;
      /* Responsive */
      @media only screen and (max-width: 626px) {
        font-size: 14px;
      }
      @media only screen and (max-width: 570px) {
        width: 160px;
      }
      @media only screen and (max-width: 545px) {
        width: 140px;
      }
      @media only screen and (max-width: 355px) {
        font-size: 12px;
      }
    }
    p {
      font-size: 14px;
      /* Responsive */
      @media only screen and (max-width: 626px) {
        font-size: 12px;
      }
      @media only screen and (max-width: 545px) {
        width: 250px;
      }
    }
  }
`;
