import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    font-family: sans-serif;
}

html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`;

export default GlobalStyle;
