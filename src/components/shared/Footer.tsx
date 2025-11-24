import { Box, Container, Grid, Typography, IconButton, Link as MuiLink, Divider } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                mt: "auto",
                py: 6,
                px: 2,
                backgroundColor: "rgba(18, 18, 18, 0.95)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom fontWeight={700}>
                            🍉 Meloncholy Games
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Crafting unique gaming experiences with passion and creativity. Based in the United States.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom fontWeight={600} fontSize="1rem">
                            Navigation
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <MuiLink component={Link} to="/" color="text.secondary" underline="hover">
                                Home
                            </MuiLink>
                            <MuiLink component={Link} to="/about" color="text.secondary" underline="hover">
                                About Us
                            </MuiLink>
                            <MuiLink component={Link} to="/project-cantaloupe" color="text.secondary" underline="hover">
                                Project Cantaloupe
                            </MuiLink>
                            <MuiLink component={Link} to="/contact" color="text.secondary" underline="hover">
                                Contact
                            </MuiLink>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight={600} fontSize="1rem">
                            Connect With Us
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                            <IconButton
                                aria-label="Twitter"
                                color="primary"
                                sx={{ "&:hover": { transform: "translateY(-3px)", transition: "transform 0.2s" } }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                aria-label="GitHub"
                                color="primary"
                                sx={{ "&:hover": { transform: "translateY(-3px)", transition: "transform 0.2s" } }}
                            >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton
                                aria-label="LinkedIn"
                                color="primary"
                                sx={{ "&:hover": { transform: "translateY(-3px)", transition: "transform 0.2s" } }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Email"
                                color="primary"
                                sx={{ "&:hover": { transform: "translateY(-3px)", transition: "transform 0.2s" } }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} Meloncholy Games. All rights reserved. Made with 💚 and 🍉
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
