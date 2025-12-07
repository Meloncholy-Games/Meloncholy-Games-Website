import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Link as MuiLink,
    Divider,
    useTheme
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                mt: "auto",
                py: { xs: 6, md: 8 },
                px: 2,
                backgroundColor: "background.paper",
                borderTop: `1px solid ${theme.palette.divider}`
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5} justifyContent="space-between">
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            fontWeight={600}
                            sx={{ fontSize: "1.125rem" }}
                        >
                            🍉 Meloncholy Games
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2, lineHeight: 1.7 }}
                        >
                            Crafting unique gaming experiences with passion and creativity. Based in
                            the United States.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 2, fontSize: "0.875rem", letterSpacing: "0.05em" }}
                        >
                            NAVIGATION
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            <MuiLink
                                component={Link}
                                to="/"
                                color="text.secondary"
                                underline="none"
                                sx={{
                                    fontSize: "0.9375rem",
                                    transition: "color 0.2s",
                                    "&:hover": { color: "text.primary" }
                                }}
                            >
                                Home
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to="/about"
                                color="text.secondary"
                                underline="none"
                                sx={{
                                    fontSize: "0.9375rem",
                                    transition: "color 0.2s",
                                    "&:hover": { color: "text.primary" }
                                }}
                            >
                                About Us
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to="/project-cantaloupe"
                                color="text.secondary"
                                underline="none"
                                sx={{
                                    fontSize: "0.9375rem",
                                    transition: "color 0.2s",
                                    "&:hover": { color: "text.primary" }
                                }}
                            >
                                Project Cantaloupe
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                to="/contact"
                                color="text.secondary"
                                underline="none"
                                sx={{
                                    fontSize: "0.9375rem",
                                    transition: "color 0.2s",
                                    "&:hover": { color: "text.primary" }
                                }}
                            >
                                Contact
                            </MuiLink>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 2, fontSize: "0.875rem", letterSpacing: "0.05em" }}
                        >
                            CONNECT
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                <IconButton
                                    aria-label="Twitter"
                                    sx={{
                                        color: "text.secondary",
                                        "&:hover": { color: "text.primary", bgcolor: "transparent" }
                                    }}
                                >
                                    <TwitterIcon fontSize="small" />
                                </IconButton>
                            </motion.div>
                            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                <IconButton
                                    aria-label="GitHub"
                                    sx={{
                                        color: "text.secondary",
                                        "&:hover": { color: "text.primary", bgcolor: "transparent" }
                                    }}
                                >
                                    <GitHubIcon fontSize="small" />
                                </IconButton>
                            </motion.div>
                            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                <IconButton
                                    aria-label="LinkedIn"
                                    sx={{
                                        color: "text.secondary",
                                        "&:hover": { color: "text.primary", bgcolor: "transparent" }
                                    }}
                                >
                                    <LinkedInIcon fontSize="small" />
                                </IconButton>
                            </motion.div>
                            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                                <IconButton
                                    aria-label="Email"
                                    sx={{
                                        color: "text.secondary",
                                        "&:hover": { color: "text.primary", bgcolor: "transparent" }
                                    }}
                                >
                                    <EmailIcon fontSize="small" />
                                </IconButton>
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: theme.palette.divider }} />

                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.875rem" }}
                    >
                        © {currentYear} Meloncholy Games. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
