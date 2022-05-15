import React from "react";
// ----- REACT-ROUTER-DOM ----- //
import { Link } from "react-router-dom";
// ----- STYLED-COMPONENTS ----- //
import { Wrapper } from "./SectionIconsStyle";
// ----- ICONS ----- //
import { FaShippingFast, FaMedal } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const SectionIcons = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default SectionIcons;
