import { createTheme, ThemeOptions } from "@mui/material/styles";

const getThemeOptions = (mode: "light" | "dark"): ThemeOptions => ({
    palette: {
        mode,
        primary: {
            main: mode === "dark" ? "#90ee90" : "#4caf50",
            light: mode === "dark" ? "#b9fbb9" : "#80e27e",
            dark: mode === "dark" ? "#5cb85c" : "#087f23",
        },
        secondary: {
            main: mode === "dark" ? "#ff7eb3" : "#e91e63",
            light: mode === "dark" ? "#ffb3d9" : "#ff6090",
            dark: mode === "dark" ? "#c25f8a" : "#b0003a",
        },
        background: {
            default: mode === "dark" ? "#0a0a0a" : "#f5f5f5",
            paper: mode === "dark" ? "#1a1a1a" : "#ffffff",
        },
        text: {
            primary: mode === "dark" ? "#ffffff" : "#000000",
            secondary: mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: "3.5rem",
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 700,
            fontSize: "2.75rem",
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.75rem",
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.5,
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.5,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.7,
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "10px 24px",
                    fontSize: "1rem",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease-in-out",
                },
                contained: {
                    "&:hover": {
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: mode === "dark"
                        ? "0 4px 20px rgba(0, 0, 0, 0.5)"
                        : "0 4px 20px rgba(0, 0, 0, 0.08)",
                    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: mode === "dark"
                            ? "0 8px 30px rgba(0, 0, 0, 0.7)"
                            : "0 8px 30px rgba(0, 0, 0, 0.12)",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
    },
});

export const createCustomTheme = (mode: "light" | "dark") => {
    return createTheme(getThemeOptions(mode));
};
