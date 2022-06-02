import React, { useState } from "react";
// ----- STYLED-COMPONENT ----- //
import { DropDownWrap } from "./SideDropDownStyle";
// ----- REACT-ICONS ----- //
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SideNavRow from "../SideNavRow/SideNavRow";
import { Transition } from "react-transition-group";

const SideDropDown = props => {
  //---- Responsible For Opening DropDown
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <DropDownWrap>
      <Transition mountOnEnter unmountOnExit in={openDropDown} timeout={{ enter: 300, exit: 200 }}>
        {state => (
          <div
            className="sideNavContainer"
            style={
              state === "entering"
                ? { animation: "dropdown 0.3s forwards", height: `${51 * props.entries.length}px` }
                : state === "entered"
                ? { transform: "scaleY(1)", opacity: "1", height: `${51 * props.entries.length}px` }
                : { animation: "dropdown 0.15s reverse forwards", transition: "height 0.3s" }
            }
          >
            {props.entries.map(entry => (
              <SideNavRow text={entry.title} />
            ))}
          </div>
        )}
      </Transition>

      <div className="dropdownRow" onClick={() => setOpenDropDown(prevState => !prevState)}>
        <div className="seeAll">see all</div>
        <span>{openDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
    </DropDownWrap>
  );
};

export default SideDropDown;
