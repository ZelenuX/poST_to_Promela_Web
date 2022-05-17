import styled, {css} from 'styled-components';

const RootPageContainer = styled.div`
  display: grid;
  flex-grow: 1;
  padding: 1vw;
  background: #ececec;

  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  gap: 1vw;
  
  * {font-size: max(2vh, 12px);}
`;

type LinearContainerProps = {stretchingAlong?: boolean, gap?: number};
const LinearContainer = styled.div`${(props: LinearContainerProps) => css`
  display: flex;
  align-items: stretch;
  
  ${props.stretchingAlong && css`
    > * { flex-grow: 1; }
  `}
`}`;

const Column = styled(LinearContainer)`${(props: LinearContainerProps) => css`
  flex-direction: column;

  gap: ${props.gap ?? 0}vh;
`}`;

const Row = styled(LinearContainer)`${(props: LinearContainerProps) => css`
  flex-direction: row;

  gap: ${props.gap ?? 0}vw;
`}`;

const Options = styled.div`
  display: flex;
  flex-wrap: row;
  gap: 1vw;
`;

const OptionsSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  
  font-size: max(2.5vh, 15px);
`;

const Button = styled.button`
  display: flex;
  min-width: 20vw;
  min-height: 5vh;
  
  background: #f0f0f0;
  border: solid 1px #aa00aa;
  border-radius: 4px;
`;

export const Styled = {
    RootPageContainer,
    Column,
    Row,
    Options,
    OptionsSet,
    Button,
}