import React, { useEffect } from "react";
// ----- REDUX ----- //
import { useDispatch, useSelector } from "react-redux";
// ----- STYLED-COMPONENT ----- //
import { Wrapper } from "./ProductLayoutStyle";
// ----- IMAGE-GALLERY-PLUGIN ----- //
import ImageGallery from "react-image-gallery";
import { fetchProductDetailsAsync } from "../../Redux/FetchSingleProduct/SingleProductSlice";
// ----- REACT-ROUTER-DOM ----- //
import { useParams } from "react-router-dom";
import { formatPrice } from "../../helpers/index";

const ProductLayout = () => {
  const { singleProduct, loading } = useSelector(state => state.singleProduct);
  const { title } = useParams();
  const dispatch = useDispatch();
  console.log("single", singleProduct);

  useEffect(() => {
    dispatch(fetchProductDetailsAsync(title));
  }, [dispatch, title]);
  return (
    <Wrapper>
      <ImageGallery items={singleProduct?.images ? singleProduct.images : []} />
      <div>
        <h2>{singleProduct.title}</h2>
      </div>
    </Wrapper>
  );
};

export default ProductLayout;
