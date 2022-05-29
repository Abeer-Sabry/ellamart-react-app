import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { Gray, lightGray } from "../../constants";

export const ResponsiveBreadCrumb = styled.div`
  display: none;
  margin-bottom: 12px;
  @media only screen and (max-width: 992px) {
    display: block;
  }
`;
export const BarWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid ${Gray};
  margin-bottom: 30px;
  h2 {
    font-size: 25px;
    font-weight: bold;
  }
  /* Responsive-Slider-Icon */
  .sliderIcon {
    display: none;
    font-size: 20px;
    color: gray;
    @media only screen and (max-width: 545px) {
      font-size: 15px;
    }
  }
  /* Responsive */
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 2fr 10fr;
  }
  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 11fr;
    background-color: ${lightGray};
    padding: 7px 14px;
    .sliderIcon {
      display: block;
    }
    .breadCrumb {
      display: none;
    }
  }
`;
export const SelectWrapper = styled.div`
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  div.main:nth-child(2) {
    margin: 0 50px;
    span {
      display: inline-block;
      margin-right: 10px;
    }
    /* ---- Responsive ---- */
    @media only screen and (max-width: 545px) {
      .ant-select {
        width: 150px !important;
        font-size: 12px;
      }
      span {
        font-size: 12px;
      }
    }
    @media only screen and (max-width: 446px) {
      span.sort {
        display: none;
      }
    }
    @media only screen and (max-width: 390px) {
      .ant-select {
        width: 100px !important;
      }
      span {
        font-size: 10px;
      }
    }
    @media only screen and (max-width: 332px) {
      .ant-select {
        width: 80px !important;
      }
    }
    @media only screen and (max-width: 332px) {
      .ant-select {
        width: 70px !important;
      }
    }
  }
  /* ---- Responsive ---- */
  @media only screen and (max-width: 902px) {
    div.main:nth-child(1) {
      display: none;
    }
  }
  .icons {
    span {
      font-size: 23px;
      display: inline-block;
      :nth-child(1) {
        margin-right: 20px;
      }
      @media only screen and (max-width: 545px) {
        font-size: 16px;
        :nth-child(1) {
          margin-right: 10px;
        }
      }
    }
  }
`;
