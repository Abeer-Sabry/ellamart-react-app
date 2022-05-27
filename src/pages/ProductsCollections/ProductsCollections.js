import React from "react";
// ----- COMPONENTS ----- //
import NewInCover from "../../components/NewInCover/NewInCover";
import ResponsiveNewInCover from "../../components/NewInCover/ResponsiveNewInCover/ResponsiveNewInCover";
import TheMainBar from "../../components/TheMainBar/TheMainBar";
import MainFilterBar from "../../components/FilterationBar/MainFilterBar/MainFilterBar";
// ----- STYLED-COMPONENTS ----- //
import {
  Brands,
  LogoWrapper,
  MainContent,
  // ProductsWrapper,
  Paragraph,
} from "./ProductsCollectionsStyle";
// ----- DATA ----- //
import { logos } from "./logos";
// ----- CONSTANTS ----- //
import { CustomContainer } from "../../constants";
// ----- REDUX-ACTIONS----- //
import FetchProducts from "../../components/FetchProducts/FetchProducts";
// import { fetchProductsAsync } from "../../Redux/fetchProduct/fetchProductSlice";
// import { useDispatch, useSelector } from "react-redux";
// import ProductItem from "../../components/FetchProducts/ProductItem/ProductItem";

const ProductsCollections = () => {
  // REDUX
  // const dispatch = useDispatch();
  // const { products, loading } = useSelector(state => state.products);

  // useEffect(() => {
  //   dispatch(fetchProductsAsync());
  // }, [dispatch]);
  return (
    <CustomContainer>
      <NewInCover />
      <ResponsiveNewInCover />
      <TheMainBar />
      {/* ----- THE SIDE-BAR && PRODUCTS -SECTION ----- */}
      <MainContent>
        <MainFilterBar />
        {/* <ProductsWrapper>
          {products.map(product => (
            <>
              <ProductItem {...product} />
            </>
          ))}
        </ProductsWrapper> */}
        <FetchProducts />
      </MainContent>
      {/* ----- /THE SIDE-BAR && PRODUCTS -SECTION ----- */}
      {/* ----- BRANDS-SECTION ----- */}
      <Brands>
        <img
          src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-brand.jpg?v=1616386753"
          alt=""
        />
        <div>
          <p>top brands</p>
          <LogoWrapper>
            {logos.map(logo => (
              <div key={logo.id}>
                <img src={logo.img} alt="" />
              </div>
            ))}
          </LogoWrapper>
        </div>
      </Brands>
      {/* ----- /BRANDS-SECTION ----- */}
      {/* ----- PARAGRAPH-SECTION ----- */}
      <Paragraph>
        <p>
          Custom CMS Block - Phasellus volutpat magna id mauris sodales et ornare urna molestie.
          Mauris non sem tincidunt, hendrerit nisi quis honcus felis. Suspendisse tempus mi durna in
          mattis nisl egestas quis. Proin nisi justo consectetur sed lacus an bibendum commodo diam.
          Praesent vulputate arcu eros quis accumsan odio malesuada at. Nulla vel ante magna. Cras
          ultricies nulla porttitor metus cursus malesuada. Sed convallis tempor ante ac semperos.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <div>
          <button>show more</button>
        </div>
      </Paragraph>
      {/* ----- /PARAGRAPH-SECTION ----- */}
    </CustomContainer>
  );
};

export default ProductsCollections;
