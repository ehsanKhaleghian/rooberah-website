import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
    },
    spacing: 10,
    direction: "rtl",
    typography: {
        fontFamily: "IRANsans,sans-serif",
        h1: {
            fontSize: "75px",
            fontWeight: "bold"
        }
    },
    palette: {
        black: {
            main: "#000000",
            "06": "#060606",
            "16": "#161616",
            "1c": "#1c1c1c",
        },
        gray: {
            dark: "#4a4a4a",
            main: "#afafaf",
            light: "#e8ecf1",
        },
        white: "#ffffff",
        blue: "#3e64ff"
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body:
                    {
                        "@font-face": `{
                            font-family: 'IRANsans';
                            font-style: normal;
                            font-display: swap;
                            font-weight: 400;
                            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                        }`,
                        margin: 0
                    }
            },
        },
    },

});

export default theme;