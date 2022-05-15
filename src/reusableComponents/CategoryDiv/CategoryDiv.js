import styled from "styled-components";
// ---- CONSTANT-COLORS ---- //
import { lightBlue, Red } from "../../constants";

export const CategoryDiv = styled.div`
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 7px;
  transition: ease 0.2s;
  &:hover {
    color: ${lightBlue};
  }
`;
export const DropDownTitle = styled(CategoryDiv)`
  &:hover {
    color: ${Red};
  }
`;
