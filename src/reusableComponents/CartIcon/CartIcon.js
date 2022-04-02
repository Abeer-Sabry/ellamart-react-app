import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { Icon } from "./CartIconStyle";
// ---- ICONS ---- //
import { BsCart3 } from "react-icons/bs";

const CartIcon = props => {
  return (
    <Icon>
      <BsCart3 />
      <span>{props.total}</span>
    </Icon>
  );
};

export default CartIcon;
