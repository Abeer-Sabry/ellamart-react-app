import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { CustomerNeed, List } from "./DetailsStyle";
// ---- COMPONENTS ---- //
// import NewInDrop from "../DropDowns/NewInDropDown/MainNewIn/NewInDrop";
// import MustHaveDrop from "../DropDowns/MustHaveDropDown/MainMustHave/MustHaveDrop";
// import TrendDrop from "../DropDowns/TrendDropDown/MainTrendDropDown/TrendDrop";
// ---- REUSABLE-COMPONENTS ---- //
import { HeaderLinks } from "../../../reusableComponents/Links/Links";
import { Row, RowIcon } from "../../../reusableComponents/TitledIcon/TitledIcon";
// ---- ICONS---- //
import { FaUserNinja } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
// ----ANT-DESIGN

const Details = () => {
  return (
    <Row>
      <List>
        <li className="new">
          {" "}
          <HeaderLinks to="/collections/new-in">new in</HeaderLinks>
          {/* <NewInDrop /> */}
        </li>
        <li className="must">
          {" "}
          <HeaderLinks to="">must have</HeaderLinks>
          {/* <MustHaveDrop /> */}
        </li>
        <li className="trend">
          {" "}
          <HeaderLinks to="">trend</HeaderLinks>
          {/* <TrendDrop /> */}
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
    </Row>
  );
};

export default Details;
