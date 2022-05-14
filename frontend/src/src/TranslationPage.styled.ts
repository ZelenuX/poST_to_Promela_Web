import styled, {css} from 'styled-components';

const RootPageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
  gap: 20px;
  background: #ececec;
  
  > * { flex-grow: 1; }
`;

type LinearContainerProps = {stretchingAlong?: boolean, gap?: number};
const LinearContainer = styled.div`${(props: LinearContainerProps) => css`
  display: flex;
  align-items: stretch;
  gap: ${props.gap ?? 0}px;
  
  ${props.stretchingAlong && css`
    > * { flex-grow: 1; }
  `}
`}`;

const Column = styled(LinearContainer)`
  flex-direction: column;

  background: green;
`;

const Row = styled(LinearContainer)`
  flex-direction: row;
  
  background: blue;
`;

const Options = styled.div`
  display: flex;
  background: black;
  min-width: 100px;
  min-height: 50px;
  //align-self: center;
  margin: 10px;
`;

export const Styled = {
    RootPageContainer,
    Column,
    Row,
    Options,
}