import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
  }

  input, textarea {
    background-color: transparent;
    font-family: inherit;
    border: none;
    resize: none;
    height: auto;
    outline: none;
  }

  input {
    border: none;
    outline: 0;
  }

  pre {
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: pre-wrap;
    word-wrap: break-word;
}
`;
