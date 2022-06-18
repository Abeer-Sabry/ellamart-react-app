import styled from "styled-components";
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.view ? "repeat(4, 1fr)" : "repeat(1,1fr)")};
  grid-column-gap: ${props => (props.view ? "40px" : "0px")};
  grid-row-gap: ${props => (props.view ? "40px" : "0px")};
  margin-bottom: ${props => (props.view ? "40px" : "0px")};

  /* ----- Responsive ----- */
  @media only screen and (max-width: 1345px) {
    grid-template-columns: ${props => (props.view ? "repeat(3, 1fr)" : "repeat(1,1fr)")};
  }
  @media only screen and (max-width: 917px) {
    grid-template-columns: ${props => (props.view ? "repeat(2, 1fr)" : "repeat(1,1fr)")};
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: ${props => (props.view ? "repeat(1, 1fr)" : "repeat(1,1fr)")};
  }
`;
