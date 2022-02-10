import React from "react"
import {ThemeProvider} from '@mui/material/styles';
import theme from "./helpers/theme"
import {BrowserRouter} from "react-router-dom";
import Router from "./helpers/router"
import {CssBaseline} from "@mui/material";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Router/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
