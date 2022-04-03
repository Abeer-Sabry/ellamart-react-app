import styled from "styled-components";
// ----- REACT-ROUTER-DOM ----- //
import { Link } from "react-router-dom";
// ----- COLORS ----- //
import { darkBlue } from "../../constants";

export const SubLinks = styled(Link)`
  color: ${darkBlue};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${darkBlue};
    animation: border 0.4s;
    transition: ease 0.4s;
    display: none;
  }
  @keyframes border {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  &:hover {
    :after {
      display: block;
    }
  }
`;
