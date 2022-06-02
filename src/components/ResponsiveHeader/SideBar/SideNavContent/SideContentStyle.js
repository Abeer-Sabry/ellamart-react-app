import styled from "styled-components";
import { Gray, lightBlue, lightGray } from "../../../../constants";

export const ContentMainWrapper = styled.div`
  .anchor {
    color: black;
    display: block;
    padding-left: 20px;
    margin-top: 15px;
  }
`;
export const NavContentWrapper = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid ${Gray};
  padding: 15px 0;
  padding-left: 20px;
  cursor: pointer;
  &:hover {
    color: ${lightBlue};
    background-color: ${lightGray};
  }
`;
