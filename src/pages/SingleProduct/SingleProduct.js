import React, { useEffect, useState } from "react";
// ----- REACT-ROUTER-DOM ----- //
import { useParams } from "react-router-dom";
// ----- COMPONENTS ----- //
import ProductLayout from "../../components/ProductLayout/ProductLayout";
// -----REUSABLE -COMPONENTS ----- //
import ProductCarousel from "../../reusableComponents/ProductCarousel/ProductCarousel";
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
import ResponsiveTab from "../../components/TabSection/ResponsiveTabSection/ResponsiveTab";

const SingleProduct = () => {
  const { singleProduct, loading } = useSelector(state => state.singleProduct);
  const { products } = useSelector(state => state.products);
  console.log("products", products);
  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetailsAsync(title));
    dispatch(fetchProductsAsync());
  }, [dispatch, title]);
  // ---TABS-STATE
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <>
      <CustomContainer>
        <Breadcrumb style={{ marginTop: "30px" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item> New In</Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <ProductLayout
          images={singleProduct?.images ? singleProduct.images : []}
          title={singleProduct.title}
          rating={singleProduct.rating}
          reviews={singleProduct.reviews}
          vendor={singleProduct.vendor}
          sku={singleProduct.sku}
          stock={singleProduct.stock}
          price={singleProduct.price}
          discount={singleProduct.discountPercent}
          description={singleProduct.description}
          sizes={singleProduct.sizes}
          colors={singleProduct.colors}
        />
        {/* ----- ASK-EXPERT-SECTION ----- */}
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
        {products.map(product => (
          <ProductCarousel key={product.id} title={product.title} />
        ))}
        {/* ----- /RELATED-PRODUCT-CAROUSEL-SECTION ----- */}
      </CustomContainer>
    </>
  );
};

export default SingleProduct;
