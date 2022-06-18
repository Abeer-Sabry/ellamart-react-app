import styled from "styled-components";
// ---- COLORS ---- //
import { lightGray } from "../../constants";

export const Wrapper = styled.div`
  background-color: ${lightGray};
  padding: 50px 0;
  margin-bottom: 50px;
`;
export const ImgRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  transition: ease 0.4s;
  /* --- Responsive --- */
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 501px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .img4 {
    grid-row: 2;
    grid-column: 1/6;
  }
  .img5 {
    grid-row: 2;
    grid-column: 6/12;
  }
  */ div {
    overflow: hidden;
    text-align: center;
    &:hover {
      img {
        transform: scale(1.2, 1.2);
        transition: ease 0.5s;
      }
    }
  }
`;
