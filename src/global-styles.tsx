import { createGlobalStyle } from "styled-components";
import Reset from "./reset-styles";
const GlobalStyles = createGlobalStyle`

  ${Reset}

  :root {
  --default-font-size: 0.875rem;
  }

  * {
    font-family: "Inter", sans-serif;'Inter';

    margin:0;
    padding:0;
  }
body{
  background-color: #BB7654;
  color: #000000;
  /* font-weight: 800; */
 

  *{
    scrollbar-width: 5px;
    &::-webkit-scrollbar {
    background-color: transparent;
    border: none;
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: lightgrey;
    border-radius: 5px;
    width: 0.5rem;
  }
  }
}

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  .--ignore-case {
    text-transform: initial;
  }

 `;

export default GlobalStyles;
