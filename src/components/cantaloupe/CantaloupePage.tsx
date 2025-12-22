import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Button,
    Chip,
    Paper,
    useTheme
} from "@mui/material";
import PageLayout from "../shared/PageLayout";
import AnimatedSection from "../shared/AnimatedSection";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GamepadIcon from "@mui/icons-material/Gamepad";
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BrushIcon from "@mui/icons-material/Brush";
import DownloadIcon from "@mui/icons-material/Download";
import AppleIcon from "@mui/icons-material/Apple";
import { motion } from "framer-motion";

const CantaloupePage = () => {
    const theme = useTheme();

    const downloads = [
        {
            platform: "Windows (x64)",
            icon: "🪟",
            url: "https://cantaloupe-game-clients.s3.amazonaws.com/windows/game_x86_64.exe",
            size: "~97 MB"
        },
        {
            platform: "Windows (ARM64)",
            icon: "🪟",
            url: "https://cantaloupe-game-clients.s3.amazonaws.com/windows/game_arm64.exe",
            size: "~83 MB"
        },
        {
            platform: "macOS",
            icon: <AppleIcon sx={{ fontSize: 40 }} />,
            url: "https://cantaloupe-game-clients.s3.amazonaws.com/macos/game.dmg",
            size: "~67 MB"
        },
        {
            platform: "Linux (x64)",
            icon: "🐧",
            url: "https://cantaloupe-game-clients.s3.amazonaws.com/linux/game.x86_64",
            size: "~71 MB"
        },
        {
            platform: "Linux (ARM64)",
            icon: "🐧",
            url: "https://cantaloupe-game-clients.s3.amazonaws.com/linux/game.arm64",
            size: "~64 MB"
        }
    ];

    const features = [
        {
            icon: <GamepadIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Engaging Gameplay",
            description:
                "Fluid controls and responsive mechanics that feel great from the first jump."
        },
        {
            icon: <MapIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Handcrafted Levels",
            description: "Carefully designed worlds filled with secrets, challenges, and surprises."
        },
        {
            icon: <BrushIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Unique Art Style",
            description: "A vibrant, colorful aesthetic that brings the world to life."
        },
        {
            icon: <MusicNoteIcon sx={{ fontSize: 40, color: "text.primary" }} />,
            title: "Original Soundtrack",
            description: "An immersive audio experience that complements every moment."
        }
    ];

    const highlights = [
        "Explore vast, interconnected worlds",
        "Master precise platforming mechanics",
        "Discover hidden secrets and collectibles",
        "Face challenging boss encounters",
        "Unlock new abilities as you progress",
        "Experience a captivating story"
    ];

    const screenshots = [
        { title: "Lush Forest World", placeholder: "🌲" },
        { title: "Crystal Caverns", placeholder: "💎" },
        { title: "Sky Temple", placeholder: "⛩️" },
        { title: "Underwater Ruins", placeholder: "🌊" }
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
                        <Box sx={{ textAlign: "center", mb: 5 }}>
                            <Chip
                                icon={<AutoAwesomeIcon fontSize="small" />}
                                label="In Development"
                                variant="outlined"
                                sx={{
                                    fontSize: "0.875rem",
                                    py: 2.5,
                                    mb: 4,
                                    borderColor: theme.palette.divider
                                }}
                            />
                            <Typography
                                variant="h1"
                                gutterBottom
                                fontWeight={600}
                                sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" }, mb: 2 }}
                            >
                                Project Cantaloupe
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                                    fontWeight: 400,
                                    mb: 5,
                                    maxWidth: 750,
                                    mx: "auto"
                                }}
                            >
                                A 2D platformer adventure filled with wonder and challenge
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <AnimatedSection animation="fadeIn">
                    <Box sx={{ textAlign: "center", mb: 12 }}>
                        <Typography
                            variant="h2"
                            gutterBottom
                            fontWeight={600}
                            sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}
                        >
                            An Epic Platforming Journey
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                maxWidth: 800,
                                mx: "auto",
                                mb: 5,
                                fontSize: "1.125rem",
                                lineHeight: 1.7
                            }}
                        >
                            Project Cantaloupe is our first major title—a love letter to classic 2D
                            platformers with a modern twist. Jump, explore, and uncover the
                            mysteries of a vibrant world.
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
                                    variant="contained"
                                    size="large"
                                    startIcon={<PlayArrowIcon />}
                                    sx={{ px: 4 }}
                                >
                                    Watch Trailer
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button variant="outlined" size="large" sx={{ px: 4 }}>
                                    Wishlist on Steam
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={100} sx={{ mb: 12 }}>
                    <Box
                        sx={{
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 3,
                            p: { xs: 6, md: 8 },
                            backgroundColor: "background.paper"
                        }}
                    >
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 2, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            Download Game Client
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            align="center"
                            sx={{ mb: 6, fontSize: "1.0625rem" }}
                        >
                            Choose your platform and start playing
                        </Typography>
                        <Grid container spacing={2} justifyContent="center">
                            {downloads.map((download, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <AnimatedSection animation="scale" delay={index * 50}>
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                variant="outlined"
                                                fullWidth
                                                component="a"
                                                href={download.url}
                                                download
                                                startIcon={<DownloadIcon />}
                                                sx={{
                                                    p: 3,
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: 1.5,
                                                    height: "100%",
                                                    borderWidth: 2,
                                                    "&:hover": {
                                                        borderWidth: 2
                                                    }
                                                }}
                                            >
                                                <Box sx={{ fontSize: "2.5rem" }}>
                                                    {typeof download.icon === "string"
                                                        ? download.icon
                                                        : download.icon}
                                                </Box>
                                                <Typography variant="h6" fontWeight={600}>
                                                    {download.platform}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {download.size}
                                                </Typography>
                                            </Button>
                                        </motion.div>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={200} sx={{ mb: 12 }}>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        fontWeight={600}
                        sx={{ mb: 8, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                    >
                        Game Features
                    </Typography>
                    <Grid container spacing={3}>
                        {features.map((feature, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <AnimatedSection animation="slideUp" delay={index * 100}>
                                    <Card sx={{ height: "100%", p: 3 }}>
                                        <CardContent>
                                            <Box sx={{ mb: 2.5 }}>{feature.icon}</Box>
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                                fontWeight={600}
                                                sx={{ fontSize: "1.5rem" }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ lineHeight: 1.7 }}
                                            >
                                                {feature.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={300} sx={{ mb: 12 }}>
                    <Box
                        sx={{
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 3,
                            p: { xs: 6, md: 8 },
                            backgroundColor: "background.paper"
                        }}
                    >
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 6, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            What to Expect
                        </Typography>
                        <Grid container spacing={2}>
                            {highlights.map((highlight, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <AnimatedSection animation="scale" delay={index * 50}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 2.5,
                                                textAlign: "center",
                                                border: `1px solid ${theme.palette.divider}`,
                                                borderRadius: 2,
                                                backgroundColor: "background.default"
                                            }}
                                        >
                                            <Typography variant="body1" fontWeight={500}>
                                                ✓ {highlight}
                                            </Typography>
                                        </Paper>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={400} sx={{ mb: 12 }}>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        fontWeight={600}
                        sx={{ mb: 8, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                    >
                        Preview Gallery
                    </Typography>
                    <Grid container spacing={3}>
                        {screenshots.map((screenshot, index) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                <AnimatedSection animation="scale" delay={index * 100}>
                                    <motion.div whileHover={{ scale: 1.02 }}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                aspectRatio: "16/9",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background:
                                                    theme.palette.mode === "dark"
                                                        ? "linear-gradient(135deg, rgba(224, 224, 224, 0.08) 0%, rgba(148, 163, 184, 0.08) 100%)"
                                                        : "linear-gradient(135deg, rgba(26, 26, 26, 0.04) 0%, rgba(100, 116, 139, 0.04) 100%)",
                                                border: `1px solid ${theme.palette.divider}`,
                                                borderRadius: 3
                                            }}
                                        >
                                            <Typography
                                                variant="h1"
                                                sx={{ fontSize: "5rem", mb: 2 }}
                                            >
                                                {screenshot.placeholder}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                fontWeight={600}
                                                sx={{ mb: 0.5 }}
                                            >
                                                {screenshot.title}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Coming Soon
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={500}>
                    <Box sx={{ mb: 12 }}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight={600}
                            sx={{ mb: 4, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                        >
                            The Story
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            component="p"
                            sx={{ fontSize: "1.0625rem", lineHeight: 1.75, mb: 3 }}
                        >
                            In a world where reality bends and dreams take shape, you play as a lone
                            wanderer seeking to restore balance to a fractured realm. Navigate
                            through stunning environments, each with its own mysteries and
                            challenges.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            component="p"
                            sx={{ fontSize: "1.0625rem", lineHeight: 1.75, mb: 3 }}
                        >
                            Ancient powers lie dormant, waiting to be awakened. Will you master them
                            in time to face the darkness that threatens to consume everything? Your
                            journey begins with a single jump...
                        </Typography>
                    </Box>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={600}>
                    <Box
                        sx={{
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 3,
                            p: { xs: 6, md: 8 },
                            textAlign: "center",
                            backgroundColor: "background.paper"
                        }}
                    >
                        <PeopleIcon sx={{ fontSize: 56, mb: 3, color: "text.primary" }} />
                        <Typography
                            variant="h3"
                            gutterBottom
                            fontWeight={600}
                            sx={{ fontSize: { xs: "1.875rem", md: "2.25rem" }, mb: 2 }}
                        >
                            Stay Updated
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mb: 5, fontWeight: 400, fontSize: "1.25rem" }}
                        >
                            Follow our development journey and be the first to know about updates,
                            beta testing, and release dates.
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
                                <Button variant="contained" size="large" sx={{ px: 4 }}>
                                    Join Discord
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button variant="outlined" size="large" sx={{ px: 4 }}>
                                    Follow on Twitter
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </AnimatedSection>
            </Container>
        </PageLayout>
    );
};

export default CantaloupePage;
