import { Container, Typography, Grid, Card, CardContent, Box, Chip, useTheme } from "@mui/material";
import PageLayout from "../shared/PageLayout";
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
import { motion } from "framer-motion";

const About = () => {
    const theme = useTheme();

    const values = [
        {
            icon: <FavoriteIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Passion First",
            description:
                "We create games we love to play, infusing every project with genuine enthusiasm and care."
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Community Driven",
            description:
                "Our players are at the heart of everything we do. We listen, adapt, and grow together."
        },
        {
            icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Innovation",
            description:
                "We push boundaries and experiment with new ideas to deliver fresh gaming experiences."
        },
        {
            icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "text.primary" }} />,
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
            <Box
                sx={{
                    py: { xs: 10, md: 14 },
                    background:
                        theme.palette.mode === "dark"
                            ? "linear-gradient(180deg, #141414 0%, #0a0a0a 100%)"
                            : "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)"
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="h1"
                            align="center"
                            gutterBottom
                            fontWeight={600}
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.75rem" },
                                mb: 2
                            }}
                        >
                            About Meloncholy Games
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, fontWeight: 400 }}
                        >
                            A small indie studio with big dreams
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <AnimatedSection animation="fadeIn">
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        fontWeight={600}
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        Who We Are
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 10,
                            maxWidth: 800,
                            mx: "auto",
                            fontSize: "1.125rem",
                            lineHeight: 1.7
                        }}
                    >
                        We're a passionate indie game development studio based in the United States,
                        dedicated to creating unique and memorable gaming experiences.
                    </Typography>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={200}>
                    <Box sx={{ mb: 12 }}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 4, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            Our Story
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            component="p"
                            sx={{ fontSize: "1.0625rem", lineHeight: 1.75, mb: 3 }}
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
                            sx={{ fontSize: "1.0625rem", lineHeight: 1.75, mb: 3 }}
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
                            sx={{ fontSize: "1.0625rem", lineHeight: 1.75, mb: 3 }}
                        >
                            Every game we make is a labor of love, crafted with attention to detail
                            and a commitment to quality. We take inspiration from the games we grew
                            up with while pushing forward with new ideas and mechanics.
                        </Typography>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={300}>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        fontWeight={600}
                        sx={{ mb: 8, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                    >
                        Our Values
                    </Typography>
                    <Grid container spacing={3}>
                        {values.map((value, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <AnimatedSection animation="slideUp" delay={index * 100}>
                                    <Card sx={{ height: "100%", p: 3 }}>
                                        <CardContent>
                                            <Box sx={{ mb: 2.5 }}>{value.icon}</Box>
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                                fontWeight={600}
                                                sx={{ fontSize: "1.5rem" }}
                                            >
                                                {value.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ lineHeight: 1.7 }}
                                            >
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={400} sx={{ mt: 12 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 5, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            What We Do
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                flexWrap: "wrap",
                                justifyContent: "center",
                                mb: 5
                            }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Chip
                                        icon={skill.icon}
                                        label={skill.label}
                                        variant="outlined"
                                        sx={{
                                            fontSize: "0.9375rem",
                                            py: 3,
                                            px: 1.5,
                                            borderColor: theme.palette.divider,
                                            "&:hover": {
                                                borderColor: "text.secondary",
                                                backgroundColor: "transparent"
                                            }
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </Box>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                maxWidth: 700,
                                mx: "auto",
                                fontSize: "1.0625rem",
                                lineHeight: 1.7
                            }}
                        >
                            From concept to launch, we handle every aspect of game development. Our
                            small size allows us to be nimble, experimental, and deeply involved in
                            every detail of our projects.
                        </Typography>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={500} sx={{ mt: 12 }}>
                    <Box
                        sx={{
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 3,
                            p: { xs: 6, md: 8 },
                            textAlign: "center",
                            backgroundColor: "background.paper"
                        }}
                    >
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight={600}
                            sx={{ fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            Join Us on This Journey
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mb: 3, fontWeight: 400, fontSize: "1.25rem" }}
                        >
                            We're just getting started, and we'd love for you to be part of our
                            story.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                maxWidth: 600,
                                mx: "auto",
                                fontSize: "1.0625rem",
                                lineHeight: 1.7
                            }}
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
