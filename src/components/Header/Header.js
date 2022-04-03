import React from "react";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";
// ---- STYLED-COMPONENTS ---- //
import { HeaderWrapper } from "./HeaderStyle";
// ---- COMPONENTS ---- //
import NavigateSection from "./NavigateSection/NavigateSection";
import Details from "./Details/Details";
import Cover from "./Cover/Cover";
import SectionIcons from "./SectionIcons/SectionIcons";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <CustomContainer>
          <NavigateSection />
          <Details />
        </CustomContainer>
      </HeaderWrapper>
      <Cover />
      <SectionIcons />
    </>
  );
};

export default Header;
