import styled from "styled-components";

export const ColumIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RowIcon = styled(ColumIcon)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Row = styled(RowIcon)`
  justify-content: space-between;
`;
