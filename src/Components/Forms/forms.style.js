import styled from 'styled-components';
import { Vars } from '../../Styles/vars.style';

export const FormTextLabelStyle = styled.div`
  font-size: 1em;
  margin-bottom: .25em;
  font-weight: bold;
`

export const FormTextStyle = styled.div`
  height: 40px;
`

export const FormTextInput = styled.input`
  height: 32px;
  margin-bottom: 
  width: ${(props) => 
    props.full ? '100%' : 'auto'};
  width: 100%;
`