import styled from "styled-components";
// ----- CONSTANTS-COLORS ---- //
import { darkerGray, Gray } from "../../constants";

export const Box = styled.span`
  display: inline-block;
  padding: 2px 15px;
  border: 1px solid ${Gray};
  color: ${darkerGray};
  margin-right: 10px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const SizeFrame = styled(Box)`
  font-size: 18px;
  padding: 5px 30px;
  text-align: center;
  width: 80px;
  cursor: pointer;
  &.active {
    background-color: ${Gray};
  }
  @media only screen and (max-width: 1046px) {
    margin-bottom: 12px;
  }
`;
