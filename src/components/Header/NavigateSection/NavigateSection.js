import React from "react";
// ---- STYLED-COMPONENTS-STYLE ---- ///
import { DetailsWrapper, Wrapper } from "./NavigateSectionStyle";
// ---- REUSABLE-COMPONENTS ---- //
import CustomInput from "../../../reusableComponents/Input/CustomInput";
import CartIcon from "../../../reusableComponents/CartIcon/CartIcon";
import { ColumIcon } from "../../../reusableComponents/TitledIcon/TitledIcon";
// ---- ICONS ---- //
import { BiSearch } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const NavigateSection = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/ellamart.png?v=1617004938" alt="" />
      </div>
      <CustomInput placeholder="Search The Store" icon={<BiSearch />} />
      <DetailsWrapper>
        <div className="phoneNumber">
          <span>Available 24/7 at</span> <h3>(+84) 90 12345</h3>
        </div>
        <ColumIcon>
          <span>
            <BsSuitHeart />
          </span>
          <p>Wish Lists</p>
        </ColumIcon>
        <ColumIcon>
          <span>
            <AiOutlineUser />
          </span>
          <p>Sign In</p>
        </ColumIcon>
        <ColumIcon>
          <span>
            <CartIcon total={"0"} />
          </span>
          <p>cart</p>
        </ColumIcon>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default NavigateSection;
