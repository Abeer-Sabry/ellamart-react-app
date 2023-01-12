import React, { useState } from "react";
// ----- STYLED-COMPONENT ----- //
import {
  Arrows,
  ButtonsWrapper,
  ColorsWrapper,
  FlexDiv,
  ReviewDiv,
  TitleWrapper,
  Wrapper,
} from "./ProductLayoutStyle";
// ----- REUSABLE-COMPONENTS ----- //
import { SizeFrame } from "../../reusableComponents/BoxDiv/Box";
// ----- IMAGE-GALLERY-PLUGIN ----- //
import ImageGallery from "react-image-gallery";
// ----- REACT-ICONS ----- //
import { BsArrowRight, BsArrowLeft, BsSuitHeart, BsShare } from "react-icons/bs";
// ----- HELPERS ----- //
import { formatPrice } from "../../helpers/index";
// ----- ANT-DESIGN ----- //
import { Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cart/cartSlice";

const ProductLayout = ({ singleProduct }) => {
  const { loading } = useSelector(state => state.singleProduct);
  const dispatch = useDispatch();
  // ----- PRICE-PERCENTAGE
  const percentage = singleProduct?.discount
    ? (singleProduct.discount / 100) * singleProduct?.price
    : null;
  const newPrice = singleProduct?.price - percentage;
  // ---- /PRICE-PERCENTAGE

  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [disable, setDisable] = useState(false);

  // ----- CheckBox-Change-FUNC
  const onChangeHandler = () => {
    setDisable(!disable);
  };
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <Wrapper>
          <ImageGallery items={singleProduct?.images} />
          <div>
            <TitleWrapper>
              <h2>{singleProduct?.title}</h2>
              <Arrows>
                <BsArrowLeft />
                <BsArrowRight />
              </Arrows>
            </TitleWrapper>

            <ReviewDiv>
              <span>{singleProduct?.rating}</span>
              <span>
                {singleProduct?.reviews ? singleProduct.reviews + "reviews" : "no reviews"}
              </span>
            </ReviewDiv>

            <FlexDiv>
              <span>vendor:</span>
              {""}
              <span>{singleProduct?.vendor}</span>
            </FlexDiv>

            <FlexDiv>
              <span>SKU:</span>
              <span>{singleProduct?.sku}</span>
            </FlexDiv>

            <FlexDiv>
              <span>Availability:</span>
              <span>{singleProduct?.stock} in stock</span>
            </FlexDiv>

            {singleProduct?.discount ? (
              <p className="price">
                <span className="percentage">{formatPrice(newPrice)}</span>{" "}
                <del>{formatPrice(singleProduct?.price)}</del>
              </p>
            ) : (
              <p className="price">{formatPrice(singleProduct?.price)}</p>
            )}
            <p className="des">{singleProduct?.description}</p>
            <div>
              {singleProduct?.sizes
                ? singleProduct.sizes.map((size, index) => {
                    return (
                      <SizeFrame
                        key={index}
                        onClick={() => setActiveSize(index)}
                        className={index === activeSize ? "active" : ""}
                      >
                        {size}
                      </SizeFrame>
                    );
                  })
                : null}
            </div>
            <ColorsWrapper>
              <div className="colorName">
                <span>color:</span>
                <span> {activeColor.name}</span>
              </div>
              {singleProduct?.colors
                ? singleProduct.colors.map((color, index) => (
                    <span
                      key={index}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setActiveColor(index)}
                      className={`${activeColor === index ? "active" : ""}`}
                    ></span>
                  ))
                : null}
            </ColorsWrapper>
            <p className="quant">Quantity:</p>
            <ButtonsWrapper>
              <span>1</span>
              <button onClick={() => dispatch(addToCart(singleProduct))}>Add to cart</button>
              <span>
                <BsSuitHeart />
              </span>
              <span>
                <BsShare />
              </span>
            </ButtonsWrapper>
            <Checkbox onChange={onChangeHandler}>I agree with the Terms & conditions </Checkbox>
            <Link to="" disabled={!disable} className={`${disable ? "active" : ""}    buyBtn`}>
              Buy it now
            </Link>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ProductLayout;
