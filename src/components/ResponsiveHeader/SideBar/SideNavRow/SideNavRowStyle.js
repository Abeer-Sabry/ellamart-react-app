import styled from "styled-components";
import { lightBlue, lightGray } from "../../../../constants";

export const SideRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  &:hover {
    background-color: ${lightGray};
    p {
      color: ${lightBlue};
    }
  }
`;
