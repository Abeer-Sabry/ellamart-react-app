import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-Categories.jpg?v=1615965505");
  background-size: cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
export const Content = styled.div`
  text-align: center;
  color: white;
  h2 {
    font-size: 36px;
    margin-bottom: 7px;
    color: white;
  }
`;
