import styled from "styled-components";
// ----- CONSTANTS ----- //
import { darkerGray, lightGray } from "../../../../constants";

export const SideRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 15px 0;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background-color: ${lightGray};
    svg {
      color: ${darkerGray};
    }
  }
  svg {
    color: grey;
    font-size: 15px;
  }
`;
