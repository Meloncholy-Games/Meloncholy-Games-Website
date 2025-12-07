import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Button,
    useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import PageLayout from "../shared/PageLayout";
import AnimatedSection from "../shared/AnimatedSection";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../../assets/images/meloncholyGames.png";
import { motion } from "framer-motion";

const HomePage = () => {
    const theme = useTheme();

    return (
        <PageLayout>
            <Box
                sx={{
                    minHeight: "92vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    background:
                        theme.palette.mode === "dark"
                            ? "linear-gradient(180deg, #0a0a0a 0%, #141414 100%)"
                            : "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)"
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Box sx={{ mb: 4 }}>
                                    <motion.img
                                        src={logo}
                                        alt="Meloncholy Games Logo"
                                        style={{ width: "100%", maxWidth: 200 }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    />
                                </Box>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                        fontSize: { xs: "2.5rem", md: "3.75rem" },
                                        background:
                                            theme.palette.mode === "dark"
                                                ? "linear-gradient(135deg, #f5f5f5 0%, #94a3b8 100%)"
                                                : "linear-gradient(135deg, #1a1a1a 0%, #64748b 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    Meloncholy Games
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "text.secondary",
                                        mb: 5,
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        maxWidth: 500,
                                        fontSize: { xs: "1.25rem", md: "1.5rem" }
                                    }}
                                >
                                    Crafting unique gaming experiences with passion, creativity, and
                                    a touch of melancholy.
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            component={Link}
                                            to="/project-cantaloupe"
                                            variant="contained"
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{ px: 4 }}
                                        >
                                            Discover Our Game
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            component={Link}
                                            to="/about"
                                            variant="outlined"
                                            size="large"
                                            sx={{ px: 4 }}
                                        >
                                            Learn More
                                        </Button>
                                    </motion.div>
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: { xs: "10rem", md: "15rem" }
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        🍉
                                    </motion.div>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <AnimatedSection animation="fadeIn">
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        fontWeight={600}
                        sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        What We're About
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 10, maxWidth: 650, mx: "auto", fontSize: "1.125rem" }}
                    >
                        We're a small indie studio dedicated to creating games that matter.
                    </Typography>
                </AnimatedSection>

                <Grid container spacing={4} sx={{ mb: 10 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <AnimatedSection animation="slideUp" delay={100}>
                            <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                                <CardContent>
                                    <SportsEsportsIcon
                                        sx={{ fontSize: 64, color: "primary.main", mb: 2 }}
                                    />
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        Unique Experiences
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        We create games that stand out, offering fresh mechanics and
                                        memorable moments that stick with players long after they've
                                        put down the controller.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <AnimatedSection animation="slideUp" delay={200}>
                            <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                                <CardContent>
                                    <GroupsIcon
                                        sx={{ fontSize: 64, color: "secondary.main", mb: 2 }}
                                    />
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        Community First
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Our players are our partners. We listen to feedback, engage
                                        with our community, and build games that resonate with real
                                        people.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <AnimatedSection animation="slideUp" delay={300}>
                            <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                                <CardContent>
                                    <RocketLaunchIcon
                                        sx={{ fontSize: 64, color: "primary.main", mb: 2 }}
                                    />
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        Always Evolving
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        We're constantly learning, experimenting, and pushing
                                        ourselves to deliver better experiences with every project
                                        we tackle.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>
                </Grid>

                <AnimatedSection animation="fadeIn" delay={400}>
                    <Box
                        sx={{
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 3,
                            p: { xs: 6, md: 10 },
                            textAlign: "center",
                            backgroundColor: "background.paper",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography variant="h2" gutterBottom fontWeight={600} sx={{ mb: 2 }}>
                                Project Cantaloupe
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ mb: 4, fontWeight: 400 }}
                            >
                                Our first major game is in development
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 5, maxWidth: 650, mx: "auto", fontSize: "1.0625rem" }}
                            >
                                A 2D platformer adventure that combines tight controls, beautiful
                                art, and a world full of secrets waiting to be discovered.
                            </Typography>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    component={Link}
                                    to="/project-cantaloupe"
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{ px: 5 }}
                                >
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={500} sx={{ mt: 12 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight={600}
                            sx={{ fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            Join Our Journey
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 5, maxWidth: 700, mx: "auto", fontSize: "1.0625rem" }}
                        >
                            We're just getting started, and we'd love to have you along for the
                            ride. Follow our progress, share your thoughts, and help us build
                            something special.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="contained"
                                    size="large"
                                    sx={{ px: 4 }}
                                >
                                    Get In Touch
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    component={Link}
                                    to="/about"
                                    variant="outlined"
                                    size="large"
                                    sx={{ px: 4 }}
                                >
                                    About Us
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </AnimatedSection>
            </Container>
        </PageLayout>
    );
};

export default HomePage;
