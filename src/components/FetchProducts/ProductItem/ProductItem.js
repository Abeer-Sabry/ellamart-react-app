import React, { useState } from "react";
// ----- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";
// ----- COMPONENTS ---- //
import SingleProductModel from "../ProductModel/ProductModel";
// ----- STYLED-COMPONENT ---- //
import { ItemWrapper } from "./ProductItemStyle";
// ----- REDUX AND REDUX-ACTIONS ---- //
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../../Redux/ProductQuickModel/ProductModelSlice";
// ----- HELPERS ---- //
import { formatPrice, checkDiscountPercent } from "../../../helpers/index";

import { Rate } from "antd";
import { addToCart } from "../../../Redux/cart/cartSlice";

const ProductItem = product => {
  const { productView } = useSelector(state => state.products);

  const { id, img, title, rating, price, colors, discountPercent } = product;

  // --- REDUX
  const dispatch = useDispatch();
  // --- Use-State
  const [hover, setHover] = useState(false);
  const [mainColor, setMainColor] = useState(colors[0]);

  // ----- product-imgs-Hover-Functions ----- //
  const EnterHoverHandler = () => {
    setHover(true);
  };
  const LeaveHoverHandler = () => {
    setHover(false);
  };

  return (
    <>
      <ItemWrapper key={id} view={productView}>
        <div className="imgDiv" onMouseEnter={EnterHoverHandler} onMouseLeave={LeaveHoverHandler}>
          <Link to={`/collections/new-in/products/${id}`}>
            <img src={hover ? img[1]["hovered"] : img[0]["mainImg"]} alt="" />
          </Link>
          <button onClick={() => dispatch(getSingleProduct(product))} className="view">
            Quick View
          </button>
        </div>

        <div className="infoDiv">
          <p className="title">
            {title} - {mainColor.name}
          </p>
          <Rate disabled defaultValue={rating} />
          {discountPercent ? (
            <p className="percentage-price">
              from <del>{formatPrice(price)}</del> to{" "}
              <span>{formatPrice(checkDiscountPercent(product))}</span>
            </p>
          ) : (
            <p className="defaultPrice"> {formatPrice(price)}</p>
          )}
          <div className="colorCircles">
            {colors.map((color, index) => (
              <>
                <span
                  key={index}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setMainColor(color)}
                  className={`${mainColor === color ? "active" : ""}`}
                >
                  {" "}
                  <div className="colorName">{color.name}</div>
                </span>
              </>
            ))}
          </div>

          <div className="divCart">
            <button onClick={() => dispatch(addToCart(product))} className="cartBtn">
              add to cart
            </button>
          </div>
        </div>
      </ItemWrapper>

      <SingleProductModel />
    </>
  );
};

export default ProductItem;
