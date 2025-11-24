import { useMemo } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Router from "./Router";
import { createCustomTheme } from "../theme/theme";

const App = () => {
    const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = useMemo(
        () => createCustomTheme(darkMode ? "dark" : "light"),
        [darkMode]
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
