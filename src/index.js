import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Theme from "./style/Theme";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById("root"),
);
