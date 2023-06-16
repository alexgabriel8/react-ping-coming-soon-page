import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-danger: hsl(354, 100%, 66%);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: background-color 0.5s ease-in-out;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Libre Franklin';
        font-size: 2rem;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        max-width: 100%;
    }
`