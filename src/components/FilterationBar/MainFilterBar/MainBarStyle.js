import styled from "styled-components";
// ---- CONSTANTS-COLORS ---- //
import { darkerGray, Gray } from "../../../constants";

export const Wrapper = styled.div`
  h4 {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1.3px;
  }
  .closeIcon {
    display: none;
  }
  @media only screen and (max-width: 992px) {
    display: none;
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    z-index: 99;
    width: 230px;
    height: 100vh;
    overflow-y: scroll;
    padding: 50px 30px;
    background-color: yellow;
    .closeIcon {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;
export const Section = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${Gray};
  margin-bottom: 25px;
  /* PRICE-BUTTON */
  .applyButton {
    border: 1px solid ${Gray};
    background-color: white;
    text-align: center;
    width: 100%;
    padding: 6px 0;
    color: ${darkerGray};
    margin: 20px 0;
    font-size: 14px;
  }
`;

// ---- CATEGORY-SECTION ---- //
export const List = styled.ul``;
export const ColorWrapper = styled.div`
  button {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: none;
    margin-right: 5px;
    margin-bottom: 7px;
  }
`;
// ---- PRICE-SECTION ---- //
export const PriceBox = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 5fr;
  grid-column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${Gray};
    padding: 2px 8px;
  }
  span {
    text-align: center;
  }
`;
// ---- BRAND-SECTION ---- //
export const CheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
// ---- FEATURED-PRODUCT-SECTION ---- //
export const FeaturedProduct = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${Gray};
  margin-bottom: 35px;
  p {
    font-size: 14px;
    margin-bottom: 7px;
  }
  span {
    display: inline-block;
    margin-bottom: 7px;
  }
  .thePrice {
    font-weight: bold;
    margin-left: 5px;
  }
  a {
    margin-bottom: 20px;
  }
`;
// ---- AD-SECTION ---- //
export const AdContainer = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  img {
    transition: ease 0.5s;
  }
  &:hover {
    .overlay {
      display: block;
    }
    img {
      transform: scale(1.1, 1.1);
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
    transition: ease 0.5s;
  }
`;
export const CustomBlock = styled.div`
  p {
    font-size: 15px;
  }
  .paragraph1 {
    margin-bottom: 14px;
  }
`;
