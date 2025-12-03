import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Typography, Box, Button, Grid, Card, CardContent } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import PageLayout from "./shared/PageLayout";

const NotFound = () => {
    const [melonRotation, setMelonRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        if (isSpinning) {
            const interval = setInterval(() => {
                setMelonRotation((prev) => (prev + 10) % 360);
            }, 16);
            return () => { clearInterval(interval); };
        }
    }, [isSpinning]);

    const handleMelonClick = () => {
        setIsSpinning(true);
        setTimeout(() => { setIsSpinning(false); }, 2000);
    };

    const quickLinks = [
        {
            title: "Home",
            description: "Return to our homepage",
            icon: <HomeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            link: "/"
        },
        {
            title: "About Us",
            description: "Learn about Meloncholy Games",
            icon: <ExploreIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
            link: "/about"
        },
        {
            title: "Project Cantaloupe",
            description: "Check out our game",
            icon: <SportsEsportsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            link: "/project-cantaloupe"
        },
        {
            title: "Contact",
            description: "Get in touch with us",
            icon: <ContactMailIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
            link: "/contact"
        }
    ];

    return (
        <PageLayout>
            <Container>
                <Box
                    sx={{
                        minHeight: "80vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        py: 8
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "6rem", md: "10rem" },
                            fontWeight: 900,
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 2
                        }}
                    >
                        404
                    </Typography>
                    <Typography variant="h3" gutterBottom fontWeight={700} sx={{ mb: 2 }}>
                        Oops! Lost in the Game World
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
                        Looks like you've wandered into uncharted territory. This page doesn't
                        exist... yet! Maybe it's a secret level we haven't unlocked?
                    </Typography>
                    <Box
                        onClick={handleMelonClick}
                        sx={{
                            fontSize: "6rem",
                            mb: 4,
                            cursor: "pointer",
                            transform: `rotate(${melonRotation}deg)`,
                            transition: isSpinning ? "none" : "transform 0.3s ease",
                            "&:hover": {
                                transform: `rotate(${melonRotation}deg) scale(1.1)`
                            },
                            userSelect: "none"
                        }}
                    >
                        🍉
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 6, fontStyle: "italic" }}
                    >
                        (Psst... click the melon!)
                    </Typography>

                    <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 4 }}>
                        Where would you like to go?
                    </Typography>

                    <Grid container spacing={3} sx={{ mb: 6, maxWidth: 900 }}>
                        {quickLinks.map((link) => (
                            <Grid item xs={12} sm={6} md={3} key={link.title}>
                                <Card
                                    component={Link}
                                    to={link.link}
                                    sx={{
                                        height: "100%",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            p: 3
                                        }}
                                    >
                                        {link.icon}
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            sx={{ mt: 2, mb: 1 }}
                                        >
                                            {link.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {link.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        size="large"
                        startIcon={<HomeIcon />}
                        sx={{
                            px: 5,
                            py: 1.5,
                            fontSize: "1.1rem",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            "&:hover": {
                                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
                            }
                        }}
                    >
                        Back to Home
                    </Button>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default NotFound;
