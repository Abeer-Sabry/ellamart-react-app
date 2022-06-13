import styled from "styled-components";
// ----- CONSTANTS-COLORS ------ //
import { darkGray, lightBlue, lightOrange } from "../../../constants";
// ----- DROPDOWN ------ //
import { NewInWrapper } from "../DropDowns/NewInDropDown/MainNewIn/NewInStyle";
import { MustWrapper } from "../DropDowns/MustHaveDropDown/MainMustHave/MustHaveStyle";
import { TrendWrapper } from "../DropDowns/TrendDropDown/MainTrendDropDown/TrendDropStyle";
import { HeaderWrapper } from "../HeaderStyle";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  li {
    margin-right: 40px;
    /* overflow: hidden; */
    a {
      font-weight: 600;
    }
    /* Responsible for showing newIn DropDown */
    :nth-child(1) {
      :hover {
        ${HeaderWrapper} {
          overflow: visible !important;
        }
        ${NewInWrapper} {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    /* Responsible for showing mustHave DropDown */
    :nth-child(2) {
      :hover {
        ${MustWrapper} {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    /* Responsible for showing trend DropDown */
    :nth-child(3) {
      :hover {
        ${TrendWrapper} {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
`;
export const CustomerNeed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .help {
    border-right: 1px solid ${darkGray};
    padding-right: 20px;
    margin-right: 20px;
  }
  svg {
    margin-right: 7px;
    font-size: 20px;
  }
  .ninja {
    color: ${lightBlue};
  }
  .global {
    color: ${lightOrange};
  }
  .arrow {
    color: white;
    font-size: 14px;
    margin-left: 5px;
  }
  p {
    color: white;
    font-size: 14px;
  }
`;
