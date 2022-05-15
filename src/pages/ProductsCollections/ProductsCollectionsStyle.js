import styled from "styled-components";
import { darkerGray, Gray, lightGray } from "../../constants/index";

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-column-gap: 30px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 70px;
`;

// ---- BRANDS SECTION ---- //
export const Brands = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  background-color: ${Gray};
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 25px;
    text-transform: capitalize;
    font-weight: 800;
  }
`;
export const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding-right: 50px;
`;

// ---- FADE-PARAGRAPH SECTION ---- //
export const Paragraph = styled.div`
  margin: 60px 0;
  border-bottom: 1px solid ${lightGray};
  padding-bottom: 30px;
  p {
    color: ${darkerGray};
    font-size: 15px;
    :nth-child(1) {
      margin-bottom: 30px;
    }
  }
  div {
    text-align: center;
    button {
      border: 2px solid ${Gray};
      padding: 3px 30px;
      background-color: white;
      border-radius: 20px;
      font-weight: bold;
      font-size: 17px;
      margin-top: 15px;
    }
  }
`;
