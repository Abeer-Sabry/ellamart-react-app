import React from "react";
// ----- REACT-ROUTER-DOM ----- //
import { Link } from "react-router-dom";
// ----- STYLED-COMPONENTS ----- //
import { Wrapper } from "./SectionIconsStyle";
// ----- REUSABLE-COMPONENTS ----- //
import { Row } from "../../../reusableComponents/TitledIcon/TitledIcon";
// ----- ICONS ----- //
import { FaShippingFast, FaMedal } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const SectionIcons = () => {
  return (
    <Wrapper>
      <Row>
        <Link to="">
          <FaShippingFast />
          <span> free shipping and returns</span>
        </Link>

        <Link to="" className="priceBorder">
          <FaMedal />
          <span> Lowest Price Guarantee</span>
        </Link>

        <Link to="">
          <GiTrophyCup />
          <span> Longest Warranties Offer</span>
        </Link>
      </Row>
    </Wrapper>
  );
};

export default SectionIcons;
