import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { glowColor } from "../../constants/index";

export const CoverWrapper = styled.div`
  background-image: url("https://cdn.shopify.com/s/files/1/0064/4435/1539/files/slider-supermarket-1_8e7ff03d-fe3d-48e3-a8ce-0af729b9d4b1.jpg?v=1638361692");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 480px;
  background-position: center;
  display: flex;
  align-items: center;
  padding-left: 150px;

  h1 {
    color: white;
    font-weight: 900;
    font-size: 50px;
    margin-bottom: 7px;
    span {
      color: ${glowColor};
    }
  }
  p {
    color: white;
    font-size: 18px;
    margin-bottom: 40px;
  }
`;
