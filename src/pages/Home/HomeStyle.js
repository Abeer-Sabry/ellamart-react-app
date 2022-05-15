import styled from "styled-components";
// ----- COLORS ---- //
import { darkGray, glowColor, lightGray } from "../../constants";

export const Wrapper = styled.div``;

export const Categories = styled.div`
  text-align: center;
  padding: 50px 0;
  h2 {
    margin-bottom: 40px;
    font-weight: 800;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 20px;
  }
  .shopCategories {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 50px;
    .cateWrapper {
      text-align: center;
      img {
        margin-bottom: 10px;
      }
    }
  }
`;
export const Services = styled.div`
  background-color: ${lightGray};
  .service {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    padding: 50px 0;
    .card {
      background-color: white;
      border-radius: 10px;
      text-align: center;
      padding: 70px 30px;
      svg {
        font-size: 35px;
      }
      h2 {
        font-size: 17px;
        margin: 10px 0;
      }
      p {
        font-size: 14px;
        color: ${darkGray};
      }
    }
  }
`;
// ---- ADS SECTION -----//
export const Ads = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  margin: 40px 0;
`;
// ---- WHY SHOP WITH US SECTION -----//
export const WhyUs = styled.div`
  background-image: url("https://cdn.shopify.com/s/files/1/0064/4435/1539/files/bg-with-us_1920x.jpg?v=1616646261");
  background-repeat: no-repeat;
  text-align: center;
  padding: 50px 0;
  h1 {
    color: white;
    font-weight: 800;
    font-size: 37px;
    margin-bottom: 20px;
    span {
      color: ${glowColor};
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    color: white;
    img {
      width: 70px;
    }
    h2 {
      font-size: 20px;
      margin: 10px 0;
    }
    a {
      display: inline-block;
      color: white;
      border-bottom: 1px solid white;
      margin-top: 5px;
    }
  }
`;
