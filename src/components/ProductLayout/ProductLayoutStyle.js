import styled from "styled-components";
import { darkerGray, darkGray, Gray, lightBlue, Red } from "../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  margin-top: 50px;
  /* price style */
  .price {
    font-weight: bold;
    font-size: 25px;
    margin: 20px 0;
  }
  .percentage {
    color: ${Red};
    margin-right: 30px;
  }
  del {
    font-size: 22px;
    color: ${darkGray};
  }
  /* description style */
  .des {
    font-size: 13.5px;
    color: ${darkGray};
    margin-bottom: 20px;
  }
  /* quantity style */
  .quant {
    color: ${darkGray};
  }
  /* buy button style */
  .buyBtn {
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 15px 0;
    border-radius: 30px;
    border: 1px solid ${darkGray};
    background-color: white;
    text-transform: capitalize;
    color: ${darkGray};
    font-size: 15px;
  }
`;
export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-column-gap: 20px;
`;
export const Arrows = styled.div`
  border: 1px solid ${Gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-radius: 40px;
  svg {
    font-size: 20px;
  }
`;
export const ReviewDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  span:nth-child(1) {
    margin-right: 20px;
  }
  span:nth-child(2) {
    color: ${darkGray};
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  span:nth-child(1) {
    font-size: 16px;
    margin-right: 5px;
    color: ${darkGray};
  }
  span:nth-child(2) {
    font-size: 14px;
  }
`;
export const ColorsWrapper = styled.div`
  margin: 20px 0;
  .colorName {
    span:first-child {
      color: ${darkGray};
      display: inline-block;
      margin-right: 15px !important;
    }
  }
  span {
    display: inline-block;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    margin-right: 7px;
    &.active {
      border: 1px solid pink;
    }
  }
`;
export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 1fr 1fr;
  grid-column-gap: 15px;
  align-items: center;
  margin: 12px 0;
  span {
    text-align: center;
    :nth-child(1) {
      border: 1px solid ${Gray};
      border-radius: 50px;
      padding: 20px 0;
    }
    :nth-child(3),
    :nth-child(4) {
      border: 1px solid ${Gray};
      border-radius: 50%;
      width: 65px;
      height: 65px;
      line-height: 75px;
      text-align: center;
      font-size: 23px;
    }
  }
  button {
    background-color: ${lightBlue};
    border: none;
    border-radius: 50px;
    padding: 23px 0;
    color: white;
  }
`;
