import styled from "styled-components";
import { darkerGray, darkGray, Gray, lightYellow } from "../../constants";
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
    .active {
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
