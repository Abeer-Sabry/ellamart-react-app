import styled from "styled-components";
// ----- CONSTANTS-COLORS ---- //
import { darkerGray, Gray } from "../../constants";

export const Box = styled.span`
  display: inline-block;
  padding: 2px 0;
  border: 1px solid ${Gray};
  color: ${darkerGray};
  margin-right: 10px;
  width: 45px;
  text-align: center;
  font-size: 14px;
`;
