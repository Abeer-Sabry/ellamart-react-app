import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import { subContainerOpen } from "../../../Redux/FetchNavContent/NavContentSlice";
// ----- STYLED-COMPONENT ----- //
import { SideBarWrapper } from "./SideBarStyle";
import SideNavRow from "./SideNavRow/SideNavRow";
import SubSideBar from "./SubSideBar/SubSideBar";
// ----- COMPONENTS ----- //

const SideBar = ({ state }) => {
  const { entryStore } = useSelector(state => state.navContent);
  const { subContainer } = useSelector(state => state.navContent);
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);
  const dispatch = useDispatch();
  console.log("selectedMenu", selectedSubMenu);

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
      <>
        {entryStore &&
          entryStore.map((entry, index) => {
            return (
              <div key={index}>
                <SideNavRow
                  text={entry.title}
                  onClick={() => {
                    setSelectedSubMenu(entryStore.filter(item => item._id === entry._id));
                    dispatch(subContainerOpen());
                  }}
                />
                {/* <Transition
                  in={entryStore && subContainer}
                  timeout={300}
                  mountOnEnter
                  unmountOnExit
                >
                  {state => {
                    return <SubSideBar state={state} subEntry={selectedSubMenu[0]["entries"]} />;
                  }}
                </Transition> */}
              </div>
            );
          })}
      </>
    </SideBarWrapper>
  );
};

export default SideBar;
