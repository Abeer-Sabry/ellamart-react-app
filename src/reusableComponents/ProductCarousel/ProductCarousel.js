import React from "react";
// ------ THE ALICE PLUGIN ------ //
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// ------ STYLED-COMPONENT ------ //
import { AliceWrap } from "./ProductCarouselStyle";
// ------ REACT-ICONS ------ //
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
const ProductCarousel = props => {
  // const { img, title, rating, price, colors, discountPercent } = props;
  const { items } = props;
  const responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1100: {
      items: 4,
    },
    1400: {
      items: 5,
    },
  };
  return (
    <AliceWrap>
      <AliceCarousel
        responsive={responsive}
        items={items}
        renderPrevButton={() => <BsFillArrowLeftSquareFill />}
        renderNextButton={() => <BsFillArrowRightSquareFill />}
      />
    </AliceWrap>
  );
};

export default ProductCarousel;
