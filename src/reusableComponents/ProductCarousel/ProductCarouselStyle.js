import styled from "styled-components";
import { darkBlue } from "../../constants";

export const AliceWrap = styled.div`
  margin: 45px 0;
  p {
    font-size: 15px;
    margin-bottom: 10px;
    min-height: 60px;
  }
  a {
    font-size: 12px;
    margin-bottom: 10px;
  }
  svg {
    font-size: 23px;
    color: ${darkBlue};
  }
  @media only screen and (max-width: 1000px) {
    .alice-carousel__dots-item {
      display: none;
    }
  }
`;
