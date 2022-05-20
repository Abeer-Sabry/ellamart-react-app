import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ProductCarousel = props => {
  const { img, title, rating, price, colors, discountPercent } = props;

  const items = (
    <div>
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );

  return <>{/* <AliceCarousel items={items ? items : []} />{" "} */}</>;
};

export default ProductCarousel;
