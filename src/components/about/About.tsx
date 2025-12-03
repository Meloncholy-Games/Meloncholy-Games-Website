import { Container, Typography, Grid, Card, CardContent, Box, Chip } from "@mui/material";
import PageLayout from "../shared/PageLayout";
import ParallaxHero from "../shared/ParallaxHero";
import AnimatedSection from "../shared/AnimatedSection";
import TeamSection from "./TeamSection";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const About = () => {
    const values = [
        {
            icon: <FavoriteIcon sx={{ fontSize: 48, color: "primary.main" }} />,
            title: "Passion First",
            description:
                "We create games we love to play, infusing every project with genuine enthusiasm and care."
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
            title: "Community Driven",
            description:
                "Our players are at the heart of everything we do. We listen, adapt, and grow together."
        },
        {
            icon: <RocketLaunchIcon sx={{ fontSize: 48, color: "primary.main" }} />,
            title: "Innovation",
            description:
                "We push boundaries and experiment with new ideas to deliver fresh gaming experiences."
        },
        {
            icon: <EmojiEventsIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
            title: "Quality Over Quantity",
            description:
                "We believe in crafting polished, memorable experiences rather than rushing to market."
        }
    ];

    const skills = [
        { icon: <CodeIcon />, label: "Game Development" },
        { icon: <BrushIcon />, label: "Art & Design" },
        { icon: <MusicNoteIcon />, label: "Sound Design" },
        { icon: <SportsEsportsIcon />, label: "Game Design" }
    ];

    return (
        <PageLayout>
            <ParallaxHero
                title="About Meloncholy Games"
                subtitle="A small indie studio with big dreams"
                backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <AnimatedSection animation="fadeIn">
                    <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
                        Who We Are
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                    >
                        We're a passionate indie game development studio based in the United States,
                        dedicated to creating unique and memorable gaming experiences.
                    </Typography>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={200}>
                    <Box sx={{ mb: 8 }}>
                        <Typography variant="h4" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
                            Our Story
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            component="p"
                            sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
                        >
                            Meloncholy Games was born from a simple idea: gaming should be fun,
                            creative, and bring people together. What started as late-night gaming
                            sessions and "what if" conversations evolved into a full-fledged studio
                            committed to bringing fresh ideas to life.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            component="p"
                            sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
                        >
                            We're a small team of dreamers, artists, and developers who believe that
                            the best games come from genuine passion and creative freedom. We're not
                            here to follow trends—we're here to create experiences that resonate,
                            surprise, and leave a lasting impression.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            component="p"
                            sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
                        >
                            Every game we make is a labor of love, crafted with attention to detail
                            and a commitment to quality. We take inspiration from the games we grew
                            up with while pushing forward with new ideas and mechanics.
                        </Typography>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={300}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontWeight={700}
                        sx={{ mb: 6 }}
                    >
                        Our Values
                    </Typography>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <AnimatedSection animation="slideUp" delay={index * 100}>
                                    <Card sx={{ height: "100%", p: 2 }}>
                                        <CardContent>
                                            <Box sx={{ mb: 2 }}>{value.icon}</Box>
                                            <Typography variant="h5" gutterBottom fontWeight={600}>
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={400} sx={{ mt: 10 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h4" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
                            What We Do
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                flexWrap: "wrap",
                                justifyContent: "center",
                                mb: 4
                            }}
                        >
                            {skills.map((skill, index) => (
                                <Chip
                                    key={index}
                                    icon={skill.icon}
                                    label={skill.label}
                                    color="primary"
                                    variant="outlined"
                                    sx={{ fontSize: "1rem", py: 3, px: 1 }}
                                />
                            ))}
                        </Box>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}
                        >
                            From concept to launch, we handle every aspect of game development. Our
                            small size allows us to be nimble, experimental, and deeply involved in
                            every detail of our projects.
                        </Typography>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={500} sx={{ mt: 10 }}>
                    <Box
                        sx={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: 4,
                            p: 6,
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        <Typography variant="h4" gutterBottom fontWeight={700}>
                            Join Us on This Journey
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                            We're just getting started, and we'd love for you to be part of our
                            story.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}
                        >
                            Follow our progress, share your thoughts, and help us build something
                            special. The best is yet to come!
                        </Typography>
                    </Box>
                </AnimatedSection>
            </Container>

            <TeamSection />
        </PageLayout>
    );
};

export default About;
