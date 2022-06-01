import styled from "styled-components";

export const ResHeaderWrap = styled.div`
  display: grid !important;
  grid-template-columns: 3fr 6fr 3fr;
  grid-column-gap: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  display: none;
  div {
    text-align: center;
    img {
      width: 150px;
    }
  }
  svg {
    font-size: 30px;
  }
  .cart {
    text-align: right;
  }
  @media only screen and (max-width: 1200px) {
    display: block;
  }
`;
