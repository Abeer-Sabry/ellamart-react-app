import styled from "styled-components";
// ----- CONSTANT-COLORS ----- //
import { darkerGray, Gray, lightBlue, lightGray } from "../../constants";

export const CartWrap = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-column-gap: 40px;
  margin: 50px 0;
`;
export const CartHeaderContent = styled.div`
  background-color: ${lightGray};
  padding: 12px 30px;
  margin-bottom: 30px;
`;
export const CartList = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  align-items: center;
  .cartDetails {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    text-align: right;
    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3) {
      text-align: center;
    }
  }
  div {
    font-size: 17px;
    color: ${darkerGray};
  }
`;
export const ProductItemCartTable = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  align-items: center;
  border: 1px solid ${Gray};
  padding: 25px 30px;
`;
export const ProductThumb = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100px;
    margin-right: 15px;
  }
  p {
    font-size: 14px;
  }
`;
export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  align-items: center;
  text-align: right;

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3) {
    text-align: center;
  }
  div:nth-child(2) {
    display: flex;
    svg {
      font-size: 15px;
    }
  }
`;
export const OrderSummary = styled.div`
  h4 {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1.5px solid #000000;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${Gray};
    padding-bottom: 10px;
    margin-bottom: 12px;
    p,
    span {
      font-size: 15px;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
  p {
    font-size: 15px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 12px;
  }
  select {
    width: 100%;
    border: 1px solid ${Gray};
    background-color: white;
    padding: 12px 10px;
  }
  .estimatesInput {
    display: grid;
    grid-template-columns: 10fr 2fr;
    grid-column-gap: 20px;
    margin: 14px 0;
    input {
      border: 1px solid ${Gray};
      padding: 0 12px;
    }
  }
  button {
    width: 100%;
    background-color: white;
    padding: 10px 12px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid ${Gray};
    transition: 0.3s all;
    margin-top: 10px;
    &:hover {
      background-color: ${lightBlue};
      color: white;
    }
  }
`;
