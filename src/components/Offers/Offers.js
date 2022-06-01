import React from "react";
import { CustomContainer } from "../../constants";
import { ImgRow, Wrapper } from "./OfferStyle";

const Offers = () => {
  return (
    <Wrapper>
      <CustomContainer>
        <ImgRow>
          <div className="img1">
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-1_1024x1024_crop_center.jpg?v=1616145108"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-2_1024x1024_crop_center.jpg?v=1616147842"
              alt=""
            />
          </div>
          <div className="img3">
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-3_1024x1024_crop_center.jpg?v=1616147850"
              alt=""
            />
          </div>
          <div className="img4">
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-2-1_1024x1024_crop_center.jpg?v=1616150952"
              alt=""
            />
          </div>
          <div className="img5">
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-2-2_1024x1024_crop_center.jpg?v=1616150962"
              alt=""
            />
          </div>
        </ImgRow>
      </CustomContainer>
    </Wrapper>
  );
};

export default Offers;
