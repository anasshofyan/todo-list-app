import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        background-color: black;
        background-image: url('https://ik.imagekit.io/e7fvuczbgfu/Projects/planets_v1pSA0rlb.jpg?updatedAt=1720772998633');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-x: hidden;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
