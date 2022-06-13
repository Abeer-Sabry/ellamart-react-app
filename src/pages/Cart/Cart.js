import React from "react";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";
// ---- REDUX AND ACTIONS ---- //
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQty } from "../../Redux/cart/cartSlice";
// ---- HELPERS ----- //
import { formatPrice } from "../../helpers";
// ---- REACT-ICONS ----- //
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
//  ----- STYLED-COMPONENT ----- //
import {
  CartHeaderContent,
  CartList,
  CartWrap,
  OrderSummary,
  ProductDetails,
  ProductItemCartTable,
  ProductThumb,
} from "./CartStyle";

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <CustomContainer>
        <CartWrap>
          <div>
            <CartHeaderContent>
              <CartList>
                <div>products</div>
                <div className="cartDetails">
                  <div>price</div>
                  <div>quantity</div>
                  <div>total</div>
                </div>
              </CartList>
            </CartHeaderContent>

            {cartItems
              ? cartItems.map(item => {
                  return (
                    <ProductItemCartTable key={item.id}>
                      <ProductThumb>
                        {/* <img src={item?.img[0]["mainImg"]} alt="" /> */}
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </ProductThumb>
                      <ProductDetails>
                        <div>
                          {formatPrice(
                            item.discountPercent
                              ? (item.discountPercent / 100) * item.price
                              : item.price
                          )}
                        </div>
                        <div>
                          {" "}
                          <span onClick={() => dispatch(decreaseQty(item))}>
                            <BiChevronsLeft />
                          </span>{" "}
                          {item.qty}
                          <span onClick={() => dispatch(addToCart(item))}>
                            <BiChevronsRight />
                          </span>
                        </div>
                        <div>{formatPrice(item.price * item.qty)}</div>
                      </ProductDetails>
                    </ProductItemCartTable>
                  );
                })
              : null}
          </div>
          <OrderSummary>
            <h4>Order Summary </h4>
            <div className="subtotal">
              <p>sub total</p>
              <span> {cartItems.reduce((total, item) => total + item.qty * item.price, 0)}</span>
              <span>0</span>
            </div>
            <p>Get shipping estimates </p>
            <select name="" id="">
              <option value="">hii</option>
            </select>
            <div className="estimatesInput">
              <select name="" id="">
                <option value="">hi select</option>
              </select>
              <input type="text" />
            </div>
            <button>calculate shipping</button>
          </OrderSummary>
        </CartWrap>
      </CustomContainer>
    </>
  );
};

export default Cart;
