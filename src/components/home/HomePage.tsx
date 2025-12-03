import { Container, Typography, Grid, Card, CardContent, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageLayout from "../shared/PageLayout";
import AnimatedSection from "../shared/AnimatedSection";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../../assets/images/meloncholyGames.png";

const HomePage = () => {
    return (
        <PageLayout>
            <Box
                sx={{
                    minHeight: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <AnimatedSection animation="slideRight">
                                <Box sx={{ mb: 3 }}>
                                    <img
                                        src={logo}
                                        alt="Meloncholy Games Logo"
                                        style={{ width: "100%", maxWidth: 250, marginBottom: 16 }}
                                    />
                                </Box>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 900,
                                        color: "white",
                                        mb: 2,
                                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                                    }}
                                >
                                    Meloncholy Games
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.9)",
                                        mb: 4,
                                        fontWeight: 300,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Crafting unique gaming experiences with passion, creativity, and a touch of melancholy.
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                    <Button
                                        component={Link}
                                        to="/project-cantaloupe"
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            bgcolor: "white",
                                            color: "primary.main",
                                            px: 4,
                                            "&:hover": {
                                                bgcolor: "grey.100",
                                            },
                                        }}
                                    >
                                        Discover Our Game
                                    </Button>
                                    <Button
                                        component={Link}
                                        to="/about"
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            borderColor: "white",
                                            color: "white",
                                            px: 4,
                                            "&:hover": {
                                                borderColor: "white",
                                                bgcolor: "rgba(255,255,255,0.1)",
                                            },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </Box>
                            </AnimatedSection>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <AnimatedSection animation="scale" delay={200}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: { xs: "10rem", md: "15rem" },
                                    }}
                                >
                                    🍉
                                </Box>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 10 }}>
                <AnimatedSection animation="fadeIn">
                    <Typography variant="h3" align="center" gutterBottom fontWeight={700} sx={{ mb: 2 }}>
                        What We're About
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: "auto" }}>
                        We're a small indie studio dedicated to creating games that matter.
                    </Typography>
                </AnimatedSection>

                <Grid container spacing={4} sx={{ mb: 10 }}>
                    <Grid item xs={12} md={4}>
                        <AnimatedSection animation="slideUp" delay={100}>
                            <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                                <CardContent>
                                    <SportsEsportsIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        Unique Experiences
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        We create games that stand out, offering fresh mechanics and memorable moments
                                        that stick with players long after they've put down the controller.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <AnimatedSection animation="slideUp" delay={200}>
                            <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                                <CardContent>
                                    <GroupsIcon sx={{ fontSize: 64, color: "secondary.main", mb: 2 }} />
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        Community First
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Our players are our partners. We listen to feedback, engage with our community,
                                        and build games that resonate with real people.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <AnimatedSection animation="slideUp" delay={300}>
                            <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                                <CardContent>
                                    <RocketLaunchIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        Always Evolving
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        We're constantly learning, experimenting, and pushing ourselves to deliver
                                        better experiences with every project we tackle.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>
                </Grid>

                <AnimatedSection animation="fadeIn" delay={400}>
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            borderRadius: 4,
                            p: 8,
                            textAlign: "center",
                            color: "white",
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: -50,
                                right: -50,
                                width: 200,
                                height: 200,
                                borderRadius: "50%",
                                background: "rgba(255, 255, 255, 0.1)",
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: -80,
                                left: -80,
                                width: 250,
                                height: 250,
                                borderRadius: "50%",
                                background: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <Typography variant="h3" gutterBottom fontWeight={700}>
                                Project Cantaloupe
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                                Our first major game is in development
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto", fontSize: "1.1rem" }}>
                                A 2D platformer adventure that combines tight controls, beautiful art, and a world
                                full of secrets waiting to be discovered.
                            </Typography>
                            <Button
                                component={Link}
                                to="/project-cantaloupe"
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    bgcolor: "white",
                                    color: "primary.main",
                                    px: 5,
                                    py: 1.5,
                                    "&:hover": {
                                        bgcolor: "grey.100",
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={500} sx={{ mt: 10 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h4" gutterBottom fontWeight={700}>
                            Join Our Journey
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}>
                            We're just getting started, and we'd love to have you along for the ride. Follow our progress,
                            share your thoughts, and help us build something special.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button component={Link} to="/contact" variant="contained" size="large" sx={{ px: 4 }}>
                                Get In Touch
                            </Button>
                            <Button component={Link} to="/about" variant="outlined" size="large" sx={{ px: 4 }}>
                                About Us
                            </Button>
                        </Box>
                    </Box>
                </AnimatedSection>
            </Container>
        </PageLayout>
    );
};

export default HomePage;
