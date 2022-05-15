import styled from "styled-components";
// ---- COLORS ---- //
import { lightGray } from "../../constants";

export const Wrapper = styled.div`
  background-color: ${lightGray};
  padding: 50px 0;
`;
export const ImgRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: ease 0.4s;
  .img4 {
    grid-column: 1/3;
    grid-row: 2;
  }
  .img5 {
    grid-column: 3/5;
    grid-row: 2;
  }
  div {
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

// export const AdImg = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: 30px;
// `;
