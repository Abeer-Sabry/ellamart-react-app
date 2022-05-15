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
  }
  p {
    color: ${darkGray};
    margin-bottom: 25px;
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
    line-height: 37px;
    margin-right: 7px;
  }
`;
export const FooterAd = styled.div`
  text-align: center;
  margin-top: 40px;
  img {
    width: 35%;
  }
`;
export const CopyRight = styled.div`
  text-align: center;
  margin-top: 7px;
`;
