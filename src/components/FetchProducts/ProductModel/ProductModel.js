import React from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
// ---- ANT-DESIGN ---- //
// import { Modal, Button } from "antd";
// ---- STYLED-COMPONENT ---- //
import { Wrapper, DivModal } from "./ProductModelStyle";

const ProductModel = () => {
  const dispatch = useDispatch();
  const { showModel, singleProduct } = useSelector(state => state.productModel);
  return (
    <>
      {showModel ? (
        <Wrapper>
          <DivModal>
            <div>
              <img src={singleProduct.img.map(img => img.mainImg)} alt="" />
            </div>
            <div>
              <p>{singleProduct.title}</p>
            </div>
          </DivModal>
        </Wrapper>
      ) : null}
    </>
  );
};

export default ProductModel;
