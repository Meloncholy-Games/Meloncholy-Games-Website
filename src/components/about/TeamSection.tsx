import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Avatar,
    Chip,
    useTheme
} from "@mui/material";
import AnimatedSection from "../shared/AnimatedSection";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { motion } from "framer-motion";

const TeamSection = () => {
    const theme = useTheme();

    const teamMembers = [
        {
            name: "Alex Chen",
            role: "Lead Developer & Co-Founder",
            avatar: "🧑‍💻",
            bio: "Full-stack developer with a passion for creating smooth, responsive gameplay experiences.",
            skills: ["Game Development", "Programming", "System Design"],
            icon: <CodeIcon fontSize="small" />
        },
        {
            name: "Jordan Rivera",
            role: "Art Director & Co-Founder",
            avatar: "🎨",
            bio: "Visual artist bringing worlds to life through vibrant colors and unique character designs.",
            skills: ["Character Design", "Environment Art", "Animation"],
            icon: <BrushIcon fontSize="small" />
        },
        {
            name: "Sam Taylor",
            role: "Sound Designer",
            avatar: "🎵",
            bio: "Audio wizard crafting immersive soundscapes and memorable musical themes.",
            skills: ["Music Composition", "Sound Effects", "Audio Engineering"],
            icon: <MusicNoteIcon fontSize="small" />
        },
        {
            name: "Morgan Lee",
            role: "Producer & Community Manager",
            avatar: "📋",
            bio: "Keeping the team on track while building strong relationships with our player community.",
            skills: ["Project Management", "Community Building", "Marketing"],
            icon: <BusinessCenterIcon fontSize="small" />
        }
    ];

    return (
        <Box sx={{ backgroundColor: "background.default", py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <AnimatedSection animation="fadeIn">
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        fontWeight={600}
                        sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        Meet the Team
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 10,
                            maxWidth: 700,
                            mx: "auto",
                            fontSize: "1.125rem",
                            lineHeight: 1.7
                        }}
                    >
                        A small but mighty team of passionate creators building games we believe in.
                    </Typography>
                </AnimatedSection>

                <Grid container spacing={3}>
                    {teamMembers.map((member, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <AnimatedSection animation="slideUp" delay={index * 100}>
                                <motion.div whileHover={{ y: -4 }}>
                                    <Card sx={{ height: "100%", p: 3 }}>
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: 2.5,
                                                    mb: 2.5
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: 72,
                                                        height: 72,
                                                        fontSize: "2.5rem",
                                                        bgcolor:
                                                            theme.palette.mode === "dark"
                                                                ? "rgba(255, 255, 255, 0.08)"
                                                                : "rgba(0, 0, 0, 0.04)",
                                                        border: `1px solid ${theme.palette.divider}`
                                                    }}
                                                >
                                                    {member.avatar}
                                                </Avatar>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Typography
                                                        variant="h5"
                                                        fontWeight={600}
                                                        gutterBottom
                                                        sx={{ fontSize: "1.375rem" }}
                                                    >
                                                        {member.name}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 0.75,
                                                            color: "text.secondary"
                                                        }}
                                                    >
                                                        {member.icon}
                                                        <Typography
                                                            variant="body2"
                                                            fontWeight={500}
                                                            sx={{ fontSize: "0.9375rem" }}
                                                        >
                                                            {member.role}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ mb: 2.5, lineHeight: 1.7 }}
                                            >
                                                {member.bio}
                                            </Typography>
                                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                                {member.skills.map((skill, idx) => (
                                                    <Chip
                                                        key={idx}
                                                        label={skill}
                                                        size="small"
                                                        variant="outlined"
                                                        sx={{
                                                            borderColor: theme.palette.divider,
                                                            fontSize: "0.8125rem"
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </AnimatedSection>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TeamSection;
