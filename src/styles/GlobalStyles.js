import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background: #B2B2B2;
    margin: 0;
    color: #3C4048;
    /* background: hsl(270deg 100% 80%); */
  }
  
  html {
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
  }

  li {
    list-style: none;
  }

  html,
  body {
    height: 100%;
  } 
  `;
