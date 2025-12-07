import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Project Cantaloupe", path: "/project-cantaloupe" },
        { label: "Contact", path: "/contact" }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Meloncholy Games
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            selected={location.pathname === item.path}
                            sx={{ textAlign: "center" }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backdropFilter: "blur(12px)",
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? "rgba(10, 10, 10, 0.85)"
                            : "rgba(250, 250, 250, 0.85)",
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    color: "text.primary"
                }}
            >
                <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: "none",
                            color: "text.primary",
                            fontWeight: 600,
                            fontSize: { xs: "1.125rem", md: "1.25rem" },
                            letterSpacing: "-0.01em",
                            transition: "opacity 0.2s",
                            "&:hover": { opacity: 0.7 }
                        }}
                    >
                        🍉 Meloncholy Games
                    </Typography>
                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 0.5 }}>
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Box key={item.path} sx={{ position: "relative" }}>
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: "text.primary",
                                                fontWeight: isActive ? 500 : 400,
                                                fontSize: "0.9375rem",
                                                px: 2.5,
                                                py: 1.25,
                                                position: "relative",
                                                "&:hover": {
                                                    backgroundColor: "transparent",
                                                    opacity: 0.7
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                style={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    width: "32px",
                                                    height: "2px",
                                                    margin: "0 auto",
                                                    backgroundColor:
                                                        theme.palette.mode === "dark"
                                                            ? "#e0e0e0"
                                                            : "#1a1a1a",
                                                    borderRadius: "2px"
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                    </Box>
                                );
                            })}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 280,
                        backgroundColor: "background.paper",
                        borderRight: `1px solid ${theme.palette.divider}`
                    }
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
