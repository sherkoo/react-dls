import { createGlobalStyle } from 'styled-components';
import { Vars } from './vars.style';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  
  body {
    margin: ${ Vars.size.em40 };
    padding: 0;
    background: ${ Vars.colorWhite };
    font-family: ${ Vars.fontFamily };
  }

  a{
    text-decoration: none;
    color: ${Vars.color.blue};
  }
`;