import styled from "styled-components";
import { darkGray } from "../../../constants/index";
export const Wrapper = styled.div`
  display: none;
  /* Content */
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${darkGray};
  }
  @media only screen and (max-width: 470px) {
    .ant-tabs-tab-btn {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 420px) {
    .ant-tabs-tab-btn {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 392px) {
    .ant-tabs-tab-btn {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 991px) {
    display: block;
  }
`;
