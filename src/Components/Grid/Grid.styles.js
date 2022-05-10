import styled, { css } from 'styled-components';
import { Vars } from '../../Styles/vars.style';

export const Grid = styled.div`
  display: grid;
  /* padding: ${Vars.size.em16}; */
  gap: ${Vars.size.em16};
  row-gap: ${Vars.size.em16};

  ${(props) =>
    props.columns === 75 && css`
      grid-template-columns: 3fr 9fr;
  `};

  ${(props) =>
    props.columns === 2 && css`
      grid-template-columns: repeat(2, 1fr);
  `};

  ${(props) =>
    props.columns === 3 && css`
      grid-template-columns: repeat(3, 1fr);
  `};
  ${(props) =>
    props.columns === 4 && css`
      grid-template-columns: repeat(4, 1fr);
  `};
`;
