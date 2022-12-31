import React, { useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
// ---- ACTION ---- //
import { fetchProductsAsync } from "../../Redux/fetchProduct/fetchProductSlice";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
// ---- STYLED-COMPONENT ---- //
import { Wrapper } from "./FetchProductsStyle";
// ---- COMPONENT ---- //
import ProductItem from "./ProductItem/ProductItem";

const FetchProducts = () => {
  // REDUX
  const dispatch = useDispatch();
  const { products, loading, productView } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <Wrapper view={productView}>
          {products.map(product => (
            <div key={product.id}>
              <ProductItem {...product} />
            </div>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default FetchProducts;
