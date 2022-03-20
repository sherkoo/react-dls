import styled, { css } from 'styled-components';
import checkIcon from './images/icons/check.svg'

export const CheckBoxButton = styled.div`
  height: 24px;
  width: 24px;
  display: block;
  border: 2px solid grey;
  border-radius: 4px;
  transition: all .25s ease-in-out;
  background-color: white;

  ${(props) =>
    props.checked && css`
      background-color: blue;
      border: 2px solid blue;
      background-image: url(${checkIcon});
      background-size: cover;
    `};
`; 

export const CheckBoxContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all .25s ease-in-out;

  &: hover ${CheckBoxButton}{
    border-color: blue !important;
  }

  &: hover label{
    cursor: pointer;
  }
`;
