import { createGlobalStyle } from "styled-components";
import Nunito from "../assets/fonts/Nunito-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        src: url(${Nunito});
        font-family:'Nunito';
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    body {
        background-color:${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.accentColor}
    }

`;

export default GlobalStyle;
