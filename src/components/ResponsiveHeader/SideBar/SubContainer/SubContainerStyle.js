import styled from "styled-components";
import { lightGray } from "../../../../constants";

export const SubContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  transform: translateX(-450px);
  background-color: white;
`;
export const SubHeader = styled.div`
  font-size: bold;
  &:hover {
    background-color: ${lightGray};
    cursor: pointer;
  }
`;
