import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    input[type="text"] {
      background: #0c218a;
      color: white;
      outline: none;
      box-shadow: none;
      border: none;
    }
  }
`;
 
export default GlobalStyle;
