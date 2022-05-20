import React from "react";
// ----- STYLED-COMPONENTS ----- //
import { CoverWrapper } from "./CoverStyle";
// ----- REUSABLE-COMPONENTS ----- //
import { Button } from "../../reusableComponents/CustomButtons/CustomButtons";

const Cover = () => {
  return (
    <CoverWrapper>
      <div>
        <h1>
          <span>Huge Saving on</span> <br /> UHD Televisions{" "}
        </h1>
        <p>Sale up to 70% off on selected items* </p>
        <Button to="/collections/new-in">shop now</Button>
      </div>
    </CoverWrapper>
  );
};

export default Cover;
