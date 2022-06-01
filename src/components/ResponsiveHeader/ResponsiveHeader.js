import React from "react";
// ----- STYLED-COMPONENT ----- //
import { ResHeaderWrap } from "./ResponsiveHeaderStyle";
// ----- REUSABLE-COMPONENT ----- //
import CartIcon from "../../reusableComponents/CartIcon/CartIcon";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants";
// ----- REACT-ICONS ----- //
import { HiOutlineMenu } from "react-icons/hi";

const ResponsiveHeader = () => {
  return (
    <CustomContainer>
      <ResHeaderWrap>
        <span>
          <HiOutlineMenu />
        </span>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/logo-footer.png?v=1615513680"
            alt=""
          />
        </div>
        <span className="cart">
          <CartIcon total={"0"} />
        </span>
      </ResHeaderWrap>
    </CustomContainer>
  );
};

export default ResponsiveHeader;
