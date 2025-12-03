import { Container, Typography, Grid, Card, CardContent, Box, Button, Chip, Paper } from "@mui/material";
import PageLayout from "../shared/PageLayout";
import ParallaxHero from "../shared/ParallaxHero";
import AnimatedSection from "../shared/AnimatedSection";
import StructuredData from "../shared/StructuredData";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GamepadIcon from "@mui/icons-material/Gamepad";
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BrushIcon from "@mui/icons-material/Brush";

const CantaloupePage = () => {
    const features = [
        {
            icon: <GamepadIcon sx={{ fontSize: 48, color: "primary.main" }} />,
            title: "Engaging Gameplay",
            description: "Fluid controls and responsive mechanics that feel great from the first jump.",
        },
        {
            icon: <MapIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
            title: "Handcrafted Levels",
            description: "Carefully designed worlds filled with secrets, challenges, and surprises.",
        },
        {
            icon: <BrushIcon sx={{ fontSize: 48, color: "primary.main" }} />,
            title: "Unique Art Style",
            description: "A vibrant, colorful aesthetic that brings the world to life.",
        },
        {
            icon: <MusicNoteIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
            title: "Original Soundtrack",
            description: "An immersive audio experience that complements every moment.",
        },
    ];

    const highlights = [
        "Explore vast, interconnected worlds",
        "Master precise platforming mechanics",
        "Discover hidden secrets and collectibles",
        "Face challenging boss encounters",
        "Unlock new abilities as you progress",
        "Experience a captivating story",
    ];

    const screenshots = [
        { title: "Lush Forest World", placeholder: "🌲" },
        { title: "Crystal Caverns", placeholder: "💎" },
        { title: "Sky Temple", placeholder: "⛩️" },
        { title: "Underwater Ruins", placeholder: "🌊" },
    ];

    return (
        <PageLayout>
            <StructuredData type="VideoGame" />
            <ParallaxHero
                title="Project Cantaloupe"
                subtitle="A 2D platformer adventure filled with wonder and challenge"
                backgroundColor="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <AnimatedSection animation="fadeIn">
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <Chip
                            icon={<AutoAwesomeIcon />}
                            label="In Development"
                            color="primary"
                            sx={{ fontSize: "1rem", py: 3, mb: 3 }}
                        />
                        <Typography variant="h3" gutterBottom fontWeight={700}>
                            An Epic Platforming Journey
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
                            Project Cantaloupe is our first major title—a love letter to classic 2D platformers with
                            a modern twist. Jump, explore, and uncover the mysteries of a vibrant world.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<PlayArrowIcon />}
                                sx={{ px: 4, py: 1.5 }}
                            >
                                Watch Trailer
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{ px: 4, py: 1.5 }}
                            >
                                Wishlist on Steam
                            </Button>
                        </Box>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={200} sx={{ mb: 10 }}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight={700} sx={{ mb: 6 }}>
                        Game Features
                    </Typography>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <AnimatedSection animation="slideUp" delay={index * 100}>
                                    <Card sx={{ height: "100%", p: 2 }}>
                                        <CardContent>
                                            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                                            <Typography variant="h5" gutterBottom fontWeight={600}>
                                                {feature.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {feature.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={300} sx={{ mb: 10 }}>
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                            borderRadius: 4,
                            p: 6,
                        }}
                    >
                        <Typography variant="h4" align="center" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
                            What to Expect
                        </Typography>
                        <Grid container spacing={2}>
                            {highlights.map((highlight, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <AnimatedSection animation="scale" delay={index * 50}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 2,
                                                textAlign: "center",
                                                backgroundColor: "background.paper",
                                                border: "2px solid",
                                                borderColor: "primary.main",
                                            }}
                                        >
                                            <Typography variant="body1" fontWeight={600}>
                                                ✓ {highlight}
                                            </Typography>
                                        </Paper>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={400} sx={{ mb: 10 }}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight={700} sx={{ mb: 6 }}>
                        Preview Gallery
                    </Typography>
                    <Grid container spacing={3}>
                        {screenshots.map((screenshot, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <AnimatedSection animation="scale" delay={index * 100}>
                                    <Paper
                                        elevation={4}
                                        sx={{
                                            aspectRatio: "16/9",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                            transition: "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
                                        }}
                                    >
                                        <Typography variant="h1" sx={{ fontSize: "5rem", mb: 2 }}>
                                            {screenshot.placeholder}
                                        </Typography>
                                        <Typography variant="h6" color="white" fontWeight={600}>
                                            {screenshot.title}
                                        </Typography>
                                        <Typography variant="caption" color="rgba(255, 255, 255, 0.7)">
                                            Coming Soon
                                        </Typography>
                                    </Paper>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={500}>
                    <Box sx={{ mb: 8 }}>
                        <Typography variant="h4" gutterBottom fontWeight={700} sx={{ mb: 3 }}>
                            The Story
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                            In a world where reality bends and dreams take shape, you play as a lone wanderer seeking
                            to restore balance to a fractured realm. Navigate through stunning environments, each with
                            its own mysteries and challenges.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                            Ancient powers lie dormant, waiting to be awakened. Will you master them in time to face
                            the darkness that threatens to consume everything? Your journey begins with a single jump...
                        </Typography>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={600}>
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            borderRadius: 4,
                            p: 6,
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        <PeopleIcon sx={{ fontSize: 64, mb: 2 }} />
                        <Typography variant="h4" gutterBottom fontWeight={700}>
                            Stay Updated
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                            Follow our development journey and be the first to know about updates, beta testing, and release dates.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button variant="contained" size="large" sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.100" } }}>
                                Join Discord
                            </Button>
                            <Button variant="outlined" size="large" sx={{ borderColor: "white", color: "white", "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" } }}>
                                Follow on Twitter
                            </Button>
                        </Box>
                    </Box>
                </AnimatedSection>
            </Container>
        </PageLayout>
    );
};

export default CantaloupePage;
