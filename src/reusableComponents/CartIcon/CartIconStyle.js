import styled from "styled-components";
// ----- COLORS ----- //
import { Blue } from "../../constants";
// ----- REACT-ROUTER-DOM ----- //
import { Link } from "react-router-dom";
export const Icon = styled(Link)`
  position: relative;
  svg {
    font-size: 27px;
  }
  span {
    position: absolute;
    top: -50%;
    right: 0;
    transform: translate(50%, -50%);
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 25px;
    text-align: center;
    color: white;
    background-color: ${Blue};
  }
`;
