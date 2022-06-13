import React from "react";
// ----- COMPONENT ----- //
import MainFilterBar from "../MainFilterBar/MainFilterBar";
// ----- STYLED-COMPONENT ----- //
import { ResponsiveWrapper } from "./ResponsiveFilterBarStyle";

const ResponsiveFilterBar = () => {
  return (
    <ResponsiveWrapper>
      <MainFilterBar />
    </ResponsiveWrapper>
  );
};

export default ResponsiveFilterBar;
