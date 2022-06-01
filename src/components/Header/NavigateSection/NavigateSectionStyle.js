import styled from "styled-components";
// ---- COLORS ---- //
import { lightYellow } from "../../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 4fr;
  grid-column-gap: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  img {
    width: 180px;
  }
  @media only screen and (max-width: 1405px) {
    grid-template-columns: 3fr 4fr 5fr;
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    margin-left: 40px;
  }
  .phoneNumber {
    color: white;
    font-weight: 700;
    span {
      font-weight: 400;
      font-size: 14px;
    }
    h3 {
      color: white;
    }
    @media only screen and (max-width: 1435px) {
      span {
        font-size: 14px;
      }
      h3 {
        font-size: 12px;
      }
    }
  }
  svg {
    font-size: 27px;
    color: ${lightYellow};
    @media only screen and (max-width: 1468px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 1435px) {
      font-size: 20px;
    }
  }
  p {
    color: white;
    text-transform: capitalize;
    font-size: 14px;
    @media only screen and (max-width: 1468px) {
      font-size: 13px;
    }
  }
`;
