import React from "react";
// --- REDUX AND ACTIONS
import { useDispatch } from "react-redux";
import { subContainerClose } from "../../../../Redux/FetchNavContent/NavContentSlice";
import SideNavRow from "../SideNavRow/SideNavRow";
// ---- STYLED-COMPONENT
import { SubNavWrapper } from "./SubSideBarStyle";

const SubSideBar = ({ subEntry, state }) => {
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
        <h2 onClick={() => dispatch(subContainerClose())}>go back</h2>
        {subEntry.map((subEn, idx) => {
          return <SideNavRow text={subEn.title} key={idx} />;
        })}
      </>
    </SubNavWrapper>
  );
};

export default SubSideBar;
