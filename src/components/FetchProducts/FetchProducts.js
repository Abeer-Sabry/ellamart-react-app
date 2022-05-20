import React, { useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
// ---- ACTION ---- //
import { fetchProductsAsync } from "../../Redux/fetchProduct/fetchProductSlice";
// ---- STYLED-COMPONENT ---- //
import { Wrapper } from "./FetchProductsStyle";
// ---- COMPONENT ---- //
import ProductItem from "./ProductItem/ProductItem";
import SingleProductModel from "./ProductModel/ProductModel";

const FetchProducts = () => {
  // REDUX
  const dispatch = useDispatch();
  const { products, loading, productView } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <Wrapper view={productView}>
      {products.map(product => (
        <>
          <ProductItem {...product} />
        </>
      ))}
    </Wrapper>
  );
};

export default FetchProducts;
