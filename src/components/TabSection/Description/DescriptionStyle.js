import styled from "styled-components";
import { darkGray } from "../../../constants/index";
export const Wrapper = styled.div`
  p {
    color: ${darkGray};
  }
  p.description {
    margin-bottom: 30px;
  }
`;
export const LaptopWrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-column-gap: 40px;
  align-items: center;
  margin-bottom: 60px;
`;
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  align-items: center;
  h4 {
    margin-bottom: 5px;
  }
  ul {
    li {
      list-style: disc !important;
      p {
        font-size: 14px;
        margin-bottom: 3px;
      }
    }
  }
`;
