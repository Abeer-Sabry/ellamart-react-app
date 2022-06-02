import React, { useState } from "react";
// ----- STYLED-COMPONENT ----- //
import { SideRowWrapper } from "./SideNavRowStyle";
// ----- REACT-ICONS ----- //
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { subContainerOpen } from "../../../../Redux/FetchNavContent/NavContentSlice";

const SideNavRow = props => {
  // ---- Responsible for sub content data
  const [subContainerEntries, setSubContainerEntries] = useState([]);
  // ---- Responsible for open subContainer
  const { subContainer } = useSelector(state => state.navContent);
  const dispatch = useDispatch();

  // const openNav = () => {
  //   setSubContainerEntries(props.entries);
  //   setSubContainer(true);
  // };

  return (
    <SideRowWrapper
      onClick={() => {
        props.entries && setSubContainerEntries(props.entries);
        dispatch(subContainerOpen());
      }}
    >
      <div>{props.text}</div>
      <span>
        <IoIosArrowForward />
      </span>
    </SideRowWrapper>
  );
};

export default SideNavRow;
