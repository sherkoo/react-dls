import styled from 'styled-components';
import {Vars} from '../../Styles/vars.style';

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* display: inline-block; */
  /* width: 500px; */
`;

export const SearchBar = styled.input`
  /* display: flex; */
  height: ${Vars.size.em40};
  border-radius: 100px;
  border: 1px solid grey;
  padding-left: ${Vars.size.em8};
  /* box-sizing: border-box; */
  /* width: 100%; */
`;

export const SearchClearBtn = styled.div`
  /* position: absolute; */
  cursor: pointer;
  /* top: 5px; */
  /* right: -18px; */
`;
