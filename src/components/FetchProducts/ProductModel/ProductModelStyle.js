import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const DivModal = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* align-items: center; */
  width: 50%;
`;
