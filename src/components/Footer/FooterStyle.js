import styled from "styled-components";
// ----- COLORS ----- //
import { darkBlue, darkGray, Gray, lightGray } from "../../constants";

export const Wrapper = styled.div`
  background-color: ${lightGray};
  padding: 50px 0;
  text-align: center;
  margin-top: 60px;
  h2 {
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 5px;
    /* Responsive  */
    @media only screen and (max-width: 435px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 350px) {
      font-size: 14px;
    }
  }
  p {
    color: ${darkGray};
    margin-bottom: 25px;
    /* Responsive  */
    @media only screen and (max-width: 435px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 350px) {
      font-size: 10px;
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
    input {
      width: 30%;
      margin-right: 15px;
      border: 1px solid ${Gray};
    }
    @media only screen and (max-width: 801px) {
      flex-direction: column;
      input {
        width: 70%;
        margin-bottom: 15px;
      }
    }
    @media only screen and (max-width: 465px) {
      button {
        font-size: 14px;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    text-align: left;
    h3 {
      margin-bottom: 20px;
    }
    a {
      display: block;
      width: fit-content;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 801px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 25px;
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  font-size: 15px;
  span {
    font-size: 18px;
    margin-right: 10px;
  }
  a {
    display: inline-block !important;
    text-decoration: underline !important;
    color: ${darkGray};
  }
`;
export const SocialIcons = styled.div`
  a {
    display: inline-block !important;
    background-color: ${darkBlue};
    color: white;
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 7px;
    @media only screen and (max-width: 1050px) {
      width: 25px !important;
      height: 25px;
      line-height: 30px;
      font-size: 12px;
    }
  }
`;
export const FooterAd = styled.div`
  text-align: center;
  margin-top: 40px;
  img {
    width: 35%;
    @media only screen and (max-width: 800px) {
      width: 80%;
    }
  }
`;
export const CopyRight = styled.div`
  text-align: center;
  margin-top: 7px;
`;
