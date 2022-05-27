import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { Gray } from "../../constants";

export const BarWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid ${Gray};
  margin-bottom: 30px;
`;
export const SelectWrapper = styled.div`
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  div.main:nth-child(2) {
    margin: 0 50px;

    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .icons {
    span {
      font-size: 23px;
      display: inline-block;
      :nth-child(1) {
        margin-right: 20px;
      }
    }
  }
`;
