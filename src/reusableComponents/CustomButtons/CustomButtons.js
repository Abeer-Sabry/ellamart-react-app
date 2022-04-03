import styled from "styled-components";
// ---- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";
// ---- COLORS ---- //
import { darkBlue, darkGray, lightBlue } from "../../constants";

export const Button = styled(Link)`
  display: inline-block;
  border: 1px solid white;
  padding: 10px 40px;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  transition: ease 0.4s;
  &:hover {
    background-color: white;
    color: ${darkBlue};
  }
`;
export const CustomButton = styled(Button)`
  background-color: ${darkBlue};
  border: 1px solid ${darkBlue};
  color: white;
  &:hover {
    border: 1px solid ${darkGray};
    color: ${darkGray};
  }
`;

export const OptionButton = styled(Button)`
  display: inline-block;
  border: 1px solid ${darkGray};
  color: ${darkGray};
  font-size: 16px;
  &:hover {
    border: 1px solid ${lightBlue};
    background-color: ${lightBlue};
    color: white;
  }
`;
