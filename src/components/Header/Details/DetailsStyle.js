import styled from "styled-components";
import { darkGray, lightBlue, lightOrange } from "../../../constants";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin-right: 40px;
    .dropNew {
      display: none;
    }
    a {
      font-weight: 600;
    }
  }
  li.new {
    &:hover {
      .dropNew {
        display: block;
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
