import React from "react";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";
// ---- REDUX AND ACTIONS ---- //
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQty } from "../../Redux/cart/cartSlice";
// ---- HELPERS ----- //
import { formatPrice, checkDiscountPercent } from "../../helpers";
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
                  console.log(checkDiscountPercent(item));
                  return (
                    <ProductItemCartTable key={item.id}>
                      <ProductThumb>
                        <img src={item.img[0]["mainImg"]} alt={item.title} />
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </ProductThumb>
                      <ProductDetails>
                        <div>{formatPrice(checkDiscountPercent(item))}</div>
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
              : "your cart is empty"}
          </div>
          <OrderSummary>
            <h4>Order Summary </h4>
            <div className="subtotal">
              <p>sub total</p>
              <span>
                {" "}
                {formatPrice(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0))}
              </span>
            </div>
            <p>Get shipping estimates </p>
            <select name="" id="">
              <option value="">united states</option>
              <option value="">England</option>
              <option value="">turkey</option>
              <option value="">spain</option>
            </select>
            <div className="estimatesInput">
              <select name="" id="">
                <option value="">united states</option>
                <option value="">England</option>
                <option value="">turkey</option>
                <option value="">spain</option>
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
