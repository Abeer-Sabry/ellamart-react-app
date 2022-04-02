import styled from "styled-components";
// ---- REACT-ROUTER-DOM ---- //
import { NavLink } from "react-router-dom";

export const HeaderLinks = styled(NavLink)`
  display: inline-block;
  color: white;
  position: relative;
  transition: ease-in-out 0.5s;
  text-transform: capitalize;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: white;
    display: none;
    animation: ease-in-out border 0.5s;
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
