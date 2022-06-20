import React from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Redux/ProductQuickModel/ProductModelSlice";
// ---- ANT-DESIGN ---- //
import { Modal, Rate } from "antd";
// ---- STYLED-COMPONENT ---- //
// import ProductLayout from "../../ProductLayout/ProductLayout";
import { DivModal } from "./ProductModelStyle";
import { checkDiscountPercent, formatPrice } from "../../../helpers";

const ProductModel = () => {
  const dispatch = useDispatch();
  const { showModel, modelProduct } = useSelector(state => state.productModel);
  console.log("modal", modelProduct);
  return (
    <>
      <Modal
        bodyStyle={{ width: "100%" }}
        title="Product Modal"
        visible={showModel}
        onOk={() => dispatch(closeModal())}
        onCancel={() => dispatch(closeModal())}
      >
        {showModel ? (
          // <ProductLayout
          //   images={modelProduct?.images ? modelProduct.images : []}
          //   title={modelProduct.title}
          //   rating={modelProduct.rating}
          //   reviews={modelProduct.reviews}
          //   vendor={modelProduct.vendor}
          //   sku={modelProduct.sku}
          //   stock={modelProduct.stock}
          //   price={modelProduct.price}
          //   discount={modelProduct.discountPercent}
          //   description={modelProduct.description}
          //   sizes={modelProduct.sizes}
          //   colors={modelProduct.colors}
          // />
          <DivModal>
            <div>
              <img src={modelProduct.img.map(img => img.mainImg)} alt="" />
            </div>
            <div>
              <p>{modelProduct.title}</p>
              <Rate disabled defaultValue={modelProduct.rating} />
              <div>
                {" "}
                <del style={{ marginRight: "15px", color: "red", marginTop: "10px" }}>
                  {modelProduct.discountPercent ? formatPrice(modelProduct.price) : ""}
                </del>
                {formatPrice(checkDiscountPercent(modelProduct))}
              </div>
            </div>
          </DivModal>
        ) : null}
      </Modal>
    </>
  );
};

export default ProductModel;
