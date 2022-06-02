import React from "react";
import { SubHeader, SubContentContainer } from "./SubContainerStyle";

import { IoIosArrowBack } from "react-icons/io";

const SubContainer = () => {
  return (
    <SubContentContainer>
      <SubHeader>
        <IoIosArrowBack />
        menu
      </SubHeader>
      SubContainer
    </SubContentContainer>
  );
};

export default SubContainer;
