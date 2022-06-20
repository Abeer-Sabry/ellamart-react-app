import React from "react";
// STYLED-COMPONENT
import { MainDiv, FixedWrapper } from "./CustomSpinnerStyle";
// SPINNER
import { BeatLoader } from "react-spinners";
// CONSTANTS-COLORS
import { darkBlue } from "../../constants";

const CustomSpinner = () => {
  return (
    <FixedWrapper>
      <MainDiv>
        <BeatLoader color={`${darkBlue}`} size={18} />
      </MainDiv>
    </FixedWrapper>
  );
};

export default CustomSpinner;
