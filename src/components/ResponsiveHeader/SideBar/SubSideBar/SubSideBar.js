import React from "react";
import { useDispatch } from "react-redux";
import { subContainerClose } from "../../../../Redux/FetchNavContent/NavContentSlice";
import SideNavRow from "../SideNavRow/SideNavRow";
import { SubNavWrapper } from "./SubSideBarStyle";

const SubSideBar = ({ subEntry, state }) => {
  // console.log("sub", subEntry);
  const dispatch = useDispatch();
  return (
    <SubNavWrapper
      style={
        state === "entering"
          ? { animation: "moveSubBar 0.3s forwards" }
          : state === "entered"
          ? { transform: "translateX(-0px)" }
          : { animation: "moveSubBar 0.3s reverse forwards" }
      }
    >
      <>
        <h2 onClick={() => dispatch(subContainerClose())}>title</h2>
        {subEntry.map((subEn, idx) => {
          return <SideNavRow text={subEn.title} key={idx} />;
        })}
      </>
    </SubNavWrapper>
  );
};

export default SubSideBar;
