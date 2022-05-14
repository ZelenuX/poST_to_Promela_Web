import styled from "styled-components";


const RootPageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
  gap: 20px;
  background: #ececec;
  
  > * { flex-grow: 1; }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Options = styled.div`
  display: flex;
  background: blue;
  width: 400px;
  height: 100px;
`;

export const Styled = {
    RootPageContainer,
    Column,
    Options,
}