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
`;
export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* justify-content: space-between; */
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
  }
  svg {
    font-size: 27px;
    color: ${lightYellow};
  }
  p {
    color: white;
    text-transform: capitalize;
    font-size: 14px;
  }
`;
