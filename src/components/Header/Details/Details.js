import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { CustomerNeed, List, Wrapper } from "./DetailsStyle";
// ---- REUSABLE-COMPONENTS ---- //
import { HeaderLinks } from "../../../reusableComponents/Links/Links";
import { RowIcon } from "../../../reusableComponents/TitledIcon/TitledIcon";
// ---- ICONS---- //
import { FaUserNinja } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
// ----ANT-DESIGN

const Details = () => {
  return (
    <Wrapper>
      <List>
        <li>
          {" "}
          <HeaderLinks to="">new in</HeaderLinks>
        </li>
        <li>
          {" "}
          <HeaderLinks to="">must have</HeaderLinks>
        </li>
        <li>
          {" "}
          <HeaderLinks to="">trend</HeaderLinks>
        </li>
        <li>
          {" "}
          <HeaderLinks to="">Theme Demos</HeaderLinks>
        </li>
        <li>
          {" "}
          <HeaderLinks to="">Child Themes</HeaderLinks>
        </li>
        <li>
          {" "}
          <HeaderLinks to="">Pages</HeaderLinks>
        </li>
        <li>
          {" "}
          <HeaderLinks to="">Buy Theme</HeaderLinks>
        </li>
      </List>
      <CustomerNeed>
        <RowIcon className="help">
          <FaUserNinja className="ninja" />
          <p>Help</p>
        </RowIcon>
        <RowIcon className="langues">
          <MdLanguage className="global" />
          <p>Languages</p>
          <IoIosArrowDown className="arrow" />
          <div className="choices"></div>
        </RowIcon>
      </CustomerNeed>
    </Wrapper>
  );
};

export default Details;
