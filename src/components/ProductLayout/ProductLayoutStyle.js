import styled from "styled-components";
import { darkerGray, darkGray, Gray, lightBlue, Red } from "../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  margin-top: 50px;
  @media only screen and (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }
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
    @media only screen and (max-width: 1138px) {
      font-size: 13px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 579px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 475px) {
      font-size: 11.5px;
    }
  }
  /* quantity style */
  .quant {
    color: ${darkGray};
  }
  /* buy button style */
  .buyBtn {
    display: block;
    margin: 15px 0;
    padding: 15px 0;
    border-radius: 30px;
    border: 1px solid ${Gray};
    background-color: white;
    text-transform: capitalize;
    color: ${darkGray};
    font-size: 15px;
    text-align: center;
    .active {
      color: blue;
    }
    @media only screen and (max-width: 380px) {
      width: 80%;
    }
  }
`;
export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-column-gap: 20px;
  align-items: center;
  @media only screen and (max-width: 1238px) {
    h2 {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 1033px) {
    h2 {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 579px) {
    h2 {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 475px) {
    h2 {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
export const Arrows = styled.div`
  border: 1px solid ${Gray};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  align-items: center;
  padding: 12px 20px;
  border-radius: 40px;
  svg {
    font-size: 20px;
  }
  @media only screen and (max-width: 1238px) {
    grid-column-gap: 20px;
  }
  @media only screen and (max-width: 1238px) {
    padding: 9px 15px;
    svg {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 475px) {
    padding: 7px 12px;
    svg {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 408px) {
    display: none;
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
      @media only screen and (max-width: 800px) {
        grid-column: 1/2;
        margin-bottom: 15px;
        padding: 20px 50px;
      }
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
      @media only screen and (max-width: 800px) {
        grid-row: 2;
        width: 45px;
        height: 45px;
        line-height: 50px;
        font-size: 18px;
        :nth-child(3) {
          grid-column: 6/8;
        }
        :nth-child(4) {
          grid-column: 8/10;
        }
      }
      @media only screen and (max-width: 380px) {
        grid-row: 3;
        margin-top: 15px;
        :nth-child(3) {
          grid-column: 1/3;
        }
        :nth-child(4) {
          grid-column: 2/3;
        }
      }
    }
  }
  button {
    background-color: ${lightBlue};
    border: none;
    border-radius: 50px;
    padding: 23px 0;
    color: white;
    @media only screen and (max-width: 800px) {
      grid-row: 2;
      grid-column: 1/6;
      padding: 15px 0;
    }
    @media only screen and (max-width: 380px) {
      grid-column: 1/3;
    }
  }
`;
