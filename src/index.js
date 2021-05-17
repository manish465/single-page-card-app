import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle, Theme } from "./style";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById("root"),
);
