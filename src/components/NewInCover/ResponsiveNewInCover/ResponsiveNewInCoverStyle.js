import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  img {
    margin-bottom: 10px;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
  }
  @media only screen and (max-width: 991px) {
    display: block;
  }
  @media only screen and (max-width: 501px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 13px;
    }
  }
`;
