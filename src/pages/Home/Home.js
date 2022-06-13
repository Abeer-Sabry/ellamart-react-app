import React, { useEffect } from "react";
// ---- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";
// ---- COMPONENTS ---- //
import Cover from "../../components/Cover/Cover";
import SectionIcons from "../../components/Header/SectionIcons/SectionIcons";
import Offers from "../../components/Offers/Offers";
// ---- REUSABLE-COMPONENTS ---- //
import { DropLinks } from "../../reusableComponents/SubLinks/SubLinks";
import ProductCarousel from "../../reusableComponents/ProductCarousel/ProductCarousel";
import { OptionButton } from "../../reusableComponents/CustomButtons/CustomButtons";
// ---- STYLED-COMPONENTS ---- //
import {
  Ads,
  Categories,
  FeaturedProducts,
  Services,
  WhatIsNew,
  WhyUs,
  Wrapper,
} from "./HomeStyle";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";
// ---- ICONS ---- //
import { BsStarHalf, BsQuestionCircleFill } from "react-icons/bs";
import { FaWarehouse, FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
// ---- DATA ---- ///
import { categories } from "./data";
// ---- REDUX AND ACTIONS ---- //
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../Redux/fetchProduct/fetchProductSlice";

const Home = () => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <Wrapper>
      <Cover />
      <SectionIcons />
      {/* OFFERS-SECTION */}
      <Offers />
      {/* ALICE-CAROUSEL-SECTION */}
      <CustomContainer>
        <h2 className="aliceTitle">Flash Deals </h2>
        <ProductCarousel
          items={products?.slice(7).map(product => {
            return (
              <>
                <img src={product?.img[0]["mainImg"]} alt="" />
                <p>{product?.title}</p>
                <OptionButton to="">select options</OptionButton>
              </>
            );
          })}
        />
      </CustomContainer>
      {/* AD-SECTION */}
      <div className="ad">
        <img
          src="//cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-middle-1_ea59337b-c31d-4433-83d7-f0f2764ca227_1920x.jpg?v=1618802630"
          alt=""
        />
      </div>
      <CustomContainer>
        {/* SHOP-CATEGORIES SECTION */}
        <Categories>
          <h2>Shop by Categories </h2>
          <div className="shopCategories">
            {categories.map(item => (
              <div key={item.id} className="cateWrapper">
                <img src={item.img} alt="" />
                <DropLinks to="/">{item.title}</DropLinks>
              </div>
            ))}
          </div>
        </Categories>
        {/* WHAT'S NEW SECTION */}
        <WhatIsNew>
          <h2>What's New </h2>
          <ProductCarousel
            items={products?.slice(12, 20).map(product => {
              return (
                <>
                  <img src={product?.img[0]["mainImg"]} alt="" />
                  <p>{product?.title}</p>
                  <OptionButton to="">select options</OptionButton>
                </>
              );
            })}
          />
        </WhatIsNew>
      </CustomContainer>
      {/* SERVICES SECTION */}
      <Services>
        <CustomContainer className="service">
          <div className="card">
            <BsStarHalf />
            <h2>Quality and Saving</h2>
            <p>Comprehensive quality control and affordable prices</p>
          </div>
          <div className="card">
            <FaWarehouse />
            <h2>Global Warehouse</h2>
            <p>37 overseas warehouses</p>
          </div>
          <div className="card">
            <FaShippingFast />
            <h2>Fast Shipping</h2>
            <p>Fast and convenient door to door delivery</p>
          </div>
          <div className="card">
            <MdSecurity />
            <h2>Payment Security</h2>
            <p>More than 10 different secure payment methods</p>
          </div>
          <div className="card">
            <BsQuestionCircleFill />
            <h2>Have Questions?</h2>
            <p>24/7 Customer Service - We’re here and happy to help!</p>
          </div>
        </CustomContainer>
      </Services>
      <CustomContainer>
        {/* ADS-SECTION */}
        <Ads>
          <img
            src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-middle-2-1_fe4f9f63-224a-4f11-b5fb-20adad0c7e05_1024x1024_crop_center.jpg?v=1616555779"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-middle-2-2_2be77915-c661-47cc-9ffe-3a0a033e7df9_1024x1024_crop_center.jpg?v=1616555881"
            alt=""
          />
        </Ads>
        <img
          src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-bottom-2_1920x.jpg?v=1616659104"
          alt=""
        />
        <FeaturedProducts>
          <h3>Featured Products</h3>
          <ProductCarousel
            items={products?.slice(11).map(product => {
              return (
                <>
                  <img src={product?.img[0]["mainImg"]} alt="" />
                  <p>{product?.title}</p>
                  <OptionButton to="">select options</OptionButton>
                </>
              );
            })}
          />
        </FeaturedProducts>
      </CustomContainer>
      {/* WHY SHOP WITH US SECTION */}
      <WhyUs>
        <h1>
          <span>why shop </span> with us?
        </h1>
        <CustomContainer className="content">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-1_200x.png?v=1616644389"
              alt=""
            />
            <h2>Free Shipping On First Order</h2>
            <p>Praesent suscipit matt facilisis.</p>
            <Link to="/">learn more</Link>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-2_200x.png?v=1616644399"
              alt=""
            />
            <h2>Weekly Flash Sale</h2>
            <p>Praesent suscipit matt facilisis.</p>
            <Link to="/">learn more</Link>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-3_200x.png?v=1616644409"
              alt=""
            />
            <h2>Anual Payment Discount</h2>
            <p>Praesent suscipit matt facilisis.</p>
            <Link to="/">learn more</Link>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-4_200x.png?v=1616644419"
              alt=""
            />
            <h2>Cashback Reward Program</h2>
            <p>Praesent suscipit matt facilisis.</p>
            <Link to="/">learn more</Link>
          </div>
        </CustomContainer>
      </WhyUs>
    </Wrapper>
  );
};

export default Home;
