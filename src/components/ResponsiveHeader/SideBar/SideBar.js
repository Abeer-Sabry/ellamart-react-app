import React from "react";
// ----- STYLED-COMPONENT ----- //
import { SideBarWrapper } from "./SideBarStyle";
// ----- COMPONENTS ----- //
import SideNavContent from "./SideNavContent/SideNavContent";

const SideBar = ({ state }) => {
  return (
    <SideBarWrapper
      style={
        state === "entering"
          ? { animation: "moveSideBar 0.3s forwards" }
          : state === "entered"
          ? { transform: "translateX(-0px)" }
          : { animation: "moveSideBar 0.3s reverse forwards" }
      }
    >
      <div className="sideNavHeader"></div>
      <SideNavContent />
    </SideBarWrapper>
  );
};

export default SideBar;
