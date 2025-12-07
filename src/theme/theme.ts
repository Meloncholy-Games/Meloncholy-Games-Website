import { createTheme, ThemeOptions } from "@mui/material/styles";

const getThemeOptions = (mode: "light" | "dark"): ThemeOptions => ({
    palette: {
        mode,
        primary: {
            main: mode === "dark" ? "#e0e0e0" : "#1a1a1a",
            light: mode === "dark" ? "#f5f5f5" : "#404040",
            dark: mode === "dark" ? "#b0b0b0" : "#000000",
            contrastText: mode === "dark" ? "#0a0a0a" : "#ffffff"
        },
        secondary: {
            main: mode === "dark" ? "#94a3b8" : "#64748b",
            light: mode === "dark" ? "#cbd5e1" : "#94a3b8",
            dark: mode === "dark" ? "#64748b" : "#475569",
            contrastText: "#ffffff"
        },
        background: {
            default: mode === "dark" ? "#0a0a0a" : "#fafafa",
            paper: mode === "dark" ? "#141414" : "#ffffff"
        },
        text: {
            primary: mode === "dark" ? "#f5f5f5" : "#1a1a1a",
            secondary: mode === "dark" ? "rgba(245, 245, 245, 0.65)" : "rgba(26, 26, 26, 0.6)"
        },
        divider: mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: "3.75rem",
            lineHeight: 1.15,
            letterSpacing: "-0.02em"
        },
        h2: {
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em"
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em"
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: 1.3,
            letterSpacing: "-0.005em"
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.4
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.5
        },
        body1: {
            fontSize: "1.0625rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            letterSpacing: "0.01071em"
        },
        button: {
            textTransform: "none",
            fontWeight: 500,
            letterSpacing: "0.01em"
        }
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "11px 28px",
                    fontSize: "0.9375rem",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        transform: "translateY(-1px)"
                    },
                    transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                },
                contained: {
                    "&:hover": {
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)"
                    }
                },
                outlined: {
                    borderWidth: "1.5px",
                    "&:hover": {
                        borderWidth: "1.5px"
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    border:
                        mode === "dark"
                            ? "1px solid rgba(255, 255, 255, 0.08)"
                            : "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow:
                        mode === "dark"
                            ? "0 1px 3px rgba(0, 0, 0, 0.3)"
                            : "0 1px 3px rgba(0, 0, 0, 0.04)",
                    transition:
                        "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor:
                            mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)",
                        boxShadow:
                            mode === "dark"
                                ? "0 4px 12px rgba(0, 0, 0, 0.4)"
                                : "0 4px 12px rgba(0, 0, 0, 0.08)"
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                },
                outlined: {
                    border:
                        mode === "dark"
                            ? "1px solid rgba(255, 255, 255, 0.08)"
                            : "1px solid rgba(0, 0, 0, 0.06)"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 8,
                        backgroundColor:
                            mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.01)",
                        transition: "background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                    }
                }
            }
        }
    }
});

export const createCustomTheme = (mode: "light" | "dark") => {
    return createTheme(getThemeOptions(mode));
};
