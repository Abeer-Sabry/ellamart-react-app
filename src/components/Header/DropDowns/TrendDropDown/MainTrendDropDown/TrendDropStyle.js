import styled from "styled-components";
import { Gray } from "../../../../../constants";

export const MainWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 460px;
  overflow-y: scroll;
  img {
    height: 250px;
  }
`;

export const List = styled.ul`
  background-color: ${Gray};
  text-align: center;
  padding-top: 20px;
  height: 250px;
  li {
    width: 100%;
    a {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
