import React, { useState } from "react";
// ----- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";
// ----- COMPONENTS ---- //
import SingleProductModel from "../ProductModel/ProductModel";
// ----- STYLED-COMPONENT ---- //
import { ItemWrapper } from "./ProductItemStyle";
// ----- REACT-ICONS ---- //
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
// ----- REDUX AND REDUX-ACTIONS ---- //
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProduct,
  showModelAction,
} from "../../../Redux/ProductQuickModel/ProductModelSlice";
// ----- HELPERS ---- //
import { formatPrice } from "../../../helpers/index";
import { Rate } from "antd";

const ProductItem = product => {
  const { productView } = useSelector(state => state.products);

  const { id, img, title, rating, price, colors, discountPercent } = product;
  console.log("view", productView);
  // const dashedTitle = title.trim().toLowerCase().replaceAll(" ", "-");

  // --- REDUX
  const dispatch = useDispatch();
  // --- USE-STATE
  const [hover, setHover] = useState(false);
  const [mainColor, setMainColor] = useState(colors[0]);
  // ----- IMG-HOVER ----- //
  const EnterHoverHandler = () => {
    setHover(true);
  };
  const LeaveHoverHandler = () => {
    setHover(false);
  };

  // ---- PERCENTAGE-AMOUNT ---- //
  const percentage = discountPercent ? (discountPercent / 100) * price : null;
  const newPrice = price - percentage;
  // ---- /PERCENTAGE-AMOUNT ---- //

  // const ratingStars = Array.from({ length: 5 }, (_, index) => {
  //   const number = index + 0.5;
  //   return (
  //     <span key={index}>
  //       {rating >= index + 1 ? (
  //         <AiFillStar />
  //       ) : rating >= number ? (
  //         <FaStarHalfAlt />
  //       ) : (
  //         <AiOutlineStar />
  //       )}
  //     </span>
  //   );
  // });

  return (
    <>
      <ItemWrapper key={id} view={productView}>
        <div className="imgDiv" onMouseEnter={EnterHoverHandler} onMouseLeave={LeaveHoverHandler}>
          <Link to={`/collections/new-in/products/${title}`}>
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
          {/* <span>{ratingStars}</span> */}
          <Rate disabled defaultValue={rating} />
          {discountPercent ? (
            <p className="percentage-price">
              from <del>{formatPrice(price)}</del> to <span>{formatPrice(newPrice)}</span>
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
            <button className="cartBtn">add to cart</button>
          </div>
        </div>
      </ItemWrapper>

      <SingleProductModel />
    </>
  );
};

export default ProductItem;