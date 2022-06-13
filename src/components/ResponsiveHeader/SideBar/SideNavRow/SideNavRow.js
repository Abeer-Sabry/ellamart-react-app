import React from "react";
// ---- STYLED-COMPONENT ---- //
import { SideRowWrap } from "./SideNavRowStyle";

import { IoIosArrowForward } from "react-icons/io";

const SideNavRow = props => {
  return (
    <SideRowWrap onClick={props.onClick}>
      <p>{props.text}</p>
      <span>
        <IoIosArrowForward />
      </span>
    </SideRowWrap>
  );
};

export default SideNavRow;
