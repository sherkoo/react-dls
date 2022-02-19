import styled from 'styled-components';
import { Vars } from '../../Styles/vars.style';

export const DropdownButton = styled.div`
  height: ${ Vars.size.px40 };
  display: inline-flex;
  justify-content: space-between;
  gap: ${ Vars.size.px24 };
  align-items: center;
  border: 2px solid ${ Vars.color.blue };
  padding: 0 ${Vars.size.px8};
  border-radius: ${Vars.size.px8};
  cursor: pointer;
`

export const DropdownIcon = styled.div`
  /* height: ${ Vars.size.px40 }; */
`

export const DrodpdownContainer = styled.div`
  position: relative;
`

export const DropdownContents = styled.div`
  border: 2px solid ${Vars.color.blue};
  border-radius: ${Vars.size.px8};
  min-width: 200px;
  max-width: 300px;
  margin-top: -2px;
  /* display: inline-block; */
  position: absolute;
  max-height: 200px;
  overflow-y: scroll;
  background-color: ${Vars.color.white};
`

export const DrodpdownContentsItem = styled.div`
  height: ${ Vars.size.px32 };
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 ${Vars.size.px8};

  &:hover{
    background-color: ${Vars.color.grey};
  }
`