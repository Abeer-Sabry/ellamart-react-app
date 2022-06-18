import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { Icon } from "./CartIconStyle";
// ---- ICONS ---- //
import { BsCart3 } from "react-icons/bs";
// ---- REDUX ---- //
import { useSelector } from "react-redux";
const CartIcon = props => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <Icon to={props.to}>
      <BsCart3 />
      <span>{cartItems ? cartItems.length : 0}</span>
    </Icon>
  );
};

export default CartIcon;
