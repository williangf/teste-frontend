import { createGlobalStyle } from "styled-components";
import { fadeAnimation } from "./animations";

export default createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-variant-numeric: tabular-nums;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html, body, #__next {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    font-size: 16px;
  }

  iframe {
    background-color: black;
  }

  .row {
    width: 100%;
    max-width: 1240px;
  }

  .fade {
    animation: ${fadeAnimation} 0.4s ease-in-out;
  }
`;
