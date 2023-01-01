import React, { useEffect, useState } from "react";
// ----- REACT-ROUTER-DOM ----- //
import { useParams } from "react-router-dom";
// ----- COMPONENTS ----- //
import ProductLayout from "../../components/ProductLayout/ProductLayout";
import ResponsiveTab from "../../components/TabSection/ResponsiveTabSection/ResponsiveTab";
// -----REUSABLE -COMPONENTS ----- //
import ProductCarousel from "../../reusableComponents/ProductCarousel/ProductCarousel";
import { OptionButton } from "../../reusableComponents/CustomButtons/CustomButtons";
// ----- TABS ----- //
import tabs from "../../components/TabSection/Tabs";
// ----- STYLED-COMPONENTS ----- //
import { CustomerCareWrapper, TabDiv, TabTitle } from "./SingleProductStyle";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants";
// ----- REDUX AND ACTIONS ----- //
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetailsAsync } from "../../Redux/FetchSingleProduct/SingleProductSlice";
import { fetchProductsAsync } from "../../Redux/fetchProduct/fetchProductSlice";
// ----- ANT DESIGN ----- //
import { Breadcrumb } from "antd";

const SingleProduct = () => {
  const { singleProduct } = useSelector(state => state.singleProduct);
  const { products } = useSelector(state => state.products);
  console.log("single", singleProduct.images);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetailsAsync(id));
    dispatch(fetchProductsAsync());
  }, [dispatch, id]);
  // ---TABS-STATE
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <>
      <CustomContainer>
        {" "}
        <Breadcrumb style={{ marginTop: "30px" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item> New In</Breadcrumb.Item>
          <Breadcrumb.Item>{id}</Breadcrumb.Item>
        </Breadcrumb>
        <ProductLayout {...singleProduct} /> {/* ----- ASK-EXPERT-SECTION ----- */}
        <CustomerCareWrapper>
          <div className="expert">
            <div className="expertImg">
              <img
                src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/online-support.png?v=1624853856"
                alt=""
              />
              <div>
                <h3>Ask us anything</h3>
                <p>Available 24/7 at (+84) 90 12345</p>
              </div>
            </div>
            <button>ask an expert</button>
          </div>
          <div className="logos">
            <img
              src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/trust-image_800x.jpg?v=1617869040"
              alt=""
            />
          </div>
        </CustomerCareWrapper>
        {/* ----- /ASK-EXPERT-SECTION ----- */}
      </CustomContainer>
      {/* ----- TABS-SECTION ----- */}
      <TabTitle>
        <CustomContainer>
          {tabs.map(({ name, icon }, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(name)}
              className={`${activeTab === name ? "active" : ""}`}
            >
              <span>{icon}</span>
              <p>{name}</p>
            </div>
          ))}
        </CustomContainer>
      </TabTitle>
      <CustomContainer>
        <TabDiv>
          {tabs.map(
            ({ name, component }, index) =>
              activeTab === name && (
                <div className="tabDiv" key={index}>
                  {component}
                </div>
              )
          )}
        </TabDiv>
        {/* ----- /TABS-SECTION ----- */}
        <ResponsiveTab />

        {/* ----- RELATED-PRODUCT-CAROUSEL-SECTION ----- */}
        <ProductCarousel
          items={products?.map(product => (
            <div>
              <img src={product?.img[0]["mainImg"]} alt="" />
              <p>{product?.title}</p>
              <OptionButton to="">select options</OptionButton>
            </div>
          ))}
        />
        {/* ----- /RELATED-PRODUCT-CAROUSEL-SECTION ----- */}
      </CustomContainer>
    </>
  );
};

export default SingleProduct;
