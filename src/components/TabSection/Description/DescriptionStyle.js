import styled from "styled-components";
import { darkGray } from "../../../constants/index";
export const Wrapper = styled.div`
  p {
    color: ${darkGray};
  }
  p.description {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 890px) {
    p {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 600px) {
    p {
      font-size: 12px;
    }
    p.description {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 470px) {
    p {
      font-size: 11px;
    }
    p.description {
      margin-bottom: 20px;
    }
  }
`;
export const LaptopWrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-column-gap: 40px;
  align-items: center;
  margin-bottom: 60px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
  }
`;
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  align-items: center;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
  }
  h4 {
    margin-bottom: 5px;
  }
  ul {
    li {
      list-style: disc !important;
      p {
        font-size: 14px;
        margin-bottom: 3px;
        @media only screen and (max-width: 600px) {
          font-size: 12px;
        }
        @media only screen and (max-width: 470px) {
          font-size: 11px;
        }
      }
    }
  }
`;
