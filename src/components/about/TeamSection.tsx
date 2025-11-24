import { Container, Typography, Grid, Card, CardContent, Box, Avatar, Chip } from "@mui/material";
import AnimatedSection from "../shared/AnimatedSection";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Alex Chen",
            role: "Lead Developer & Co-Founder",
            avatar: "🧑‍💻",
            bio: "Full-stack developer with a passion for creating smooth, responsive gameplay experiences.",
            skills: ["Game Development", "Programming", "System Design"],
            icon: <CodeIcon />,
        },
        {
            name: "Jordan Rivera",
            role: "Art Director & Co-Founder",
            avatar: "🎨",
            bio: "Visual artist bringing worlds to life through vibrant colors and unique character designs.",
            skills: ["Character Design", "Environment Art", "Animation"],
            icon: <BrushIcon />,
        },
        {
            name: "Sam Taylor",
            role: "Sound Designer",
            avatar: "🎵",
            bio: "Audio wizard crafting immersive soundscapes and memorable musical themes.",
            skills: ["Music Composition", "Sound Effects", "Audio Engineering"],
            icon: <MusicNoteIcon />,
        },
        {
            name: "Morgan Lee",
            role: "Producer & Community Manager",
            avatar: "📋",
            bio: "Keeping the team on track while building strong relationships with our player community.",
            skills: ["Project Management", "Community Building", "Marketing"],
            icon: <BusinessCenterIcon />,
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <AnimatedSection animation="fadeIn">
                <Typography variant="h3" align="center" gutterBottom fontWeight={700} sx={{ mb: 2 }}>
                    Meet the Team
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: "auto" }}>
                    A small but mighty team of passionate creators building games we believe in.
                </Typography>
            </AnimatedSection>

            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <AnimatedSection animation="slideUp" delay={index * 100}>
                            <Card sx={{ height: "100%", p: 2 }}>
                                <CardContent>
                                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
                                        <Avatar
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                fontSize: "3rem",
                                                bgcolor: "primary.main",
                                            }}
                                        >
                                            {member.avatar}
                                        </Avatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h5" fontWeight={700} gutterBottom>
                                                {member.name}
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                                {member.icon}
                                                <Typography variant="subtitle1" color="primary" fontWeight={600}>
                                                    {member.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                        {member.bio}
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                        {member.skills.map((skill, idx) => (
                                            <Chip key={idx} label={skill} size="small" variant="outlined" color="primary" />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TeamSection;
