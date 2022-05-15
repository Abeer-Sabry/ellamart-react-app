import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ProductCarousel = ({ id, img, title, rating, price, colors, discountPercent }) => {
  const items = (
    <div key={id}>
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );

  return (
    <>
      <AliceCarousel items={items} />
    </>
  );
};

export default ProductCarousel;
