import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  a{
      text-decoration:none;
      color:inherit;
  }
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); 
  *{
      box-sizing:border-box;
  }
  body{
    font-family:"Noto Sans Kr", sans-serif;
    font-size: 14px;
  }
`;
export default GlobalStyles;
