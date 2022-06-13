import styled from "styled-components";
// ----- CONSTANTS-COLORS ----- //
import { Gray } from "../../../../../constants";

export const NewInWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.3s all ease;
`;
export const LinksWrapper = styled.div`
  background-color: ${Gray};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 40px;
  padding: 30px 50px;
`;
export const List = styled.ul`
  li {
    a {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
