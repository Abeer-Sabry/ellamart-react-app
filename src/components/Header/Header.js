import React from "react";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";
// ---- STYLED-COMPONENTS ---- //
import { HeaderWrapper } from "./HeaderStyle";
// ---- COMPONENTS ---- //
import NavigateSection from "./NavigateSection/NavigateSection";
import Details from "./Details/Details";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <CustomContainer>
          <NavigateSection />
          <Details />
        </CustomContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
