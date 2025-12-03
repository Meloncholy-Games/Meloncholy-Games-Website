import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    TextField,
    Button,
    Paper
} from "@mui/material";
import { useState } from "react";
import PageLayout from "../shared/PageLayout";
import ParallaxHero from "../shared/ParallaxHero";
import AnimatedSection from "../shared/AnimatedSection";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "@mui/icons-material/Forum";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const contactMethods = [
        {
            icon: <EmailIcon sx={{ fontSize: 48, color: "primary.main" }} />,
            title: "Email Us",
            description: "For business inquiries and support",
            contact: "hello@meloncholy.games",
            action: "Send Email"
        },
        {
            icon: <DiscordIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
            title: "Discord Community",
            description: "Join our community and chat with us",
            contact: "discord.gg/meloncholygames",
            action: "Join Server"
        },
        {
            icon: <TwitterIcon sx={{ fontSize: 48, color: "primary.main" }} />,
            title: "Twitter",
            description: "Follow for updates and announcements",
            contact: "@MeloncholyGames",
            action: "Follow Us"
        },
        {
            icon: <GitHubIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
            title: "GitHub",
            description: "Check out our open source projects",
            contact: "github.com/meloncholy-games",
            action: "View Profile"
        }
    ];

    return (
        <PageLayout>
            <ParallaxHero
                title="Get In Touch"
                subtitle="We'd love to hear from you"
                backgroundColor="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimatedSection animation="slideRight">
                            <Typography variant="h4" gutterBottom fontWeight={700}>
                                Send Us a Message
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                                Have a question, feedback, or just want to say hi? Fill out the form
                                and we'll get back to you as soon as possible.
                            </Typography>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                            >
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    endIcon={<SendIcon />}
                                    sx={{ alignSelf: "flex-start", px: 4 }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </AnimatedSection>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimatedSection animation="slideLeft">
                            <Typography variant="h4" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
                                Other Ways to Connect
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                {contactMethods.map((method, index) => (
                                    <AnimatedSection
                                        animation="slideUp"
                                        delay={index * 100}
                                        key={index}
                                    >
                                        <Card>
                                            <CardContent sx={{ p: 3 }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: 2
                                                    }}
                                                >
                                                    <Box sx={{ flexShrink: 0 }}>{method.icon}</Box>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Typography
                                                            variant="h6"
                                                            fontWeight={600}
                                                            gutterBottom
                                                        >
                                                            {method.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{ mb: 1 }}
                                                        >
                                                            {method.description}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="primary"
                                                            fontWeight={600}
                                                            sx={{ mb: 2 }}
                                                        >
                                                            {method.contact}
                                                        </Typography>
                                                        <Button variant="outlined" size="small">
                                                            {method.action}
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </AnimatedSection>
                                ))}
                            </Box>
                        </AnimatedSection>
                    </Grid>
                </Grid>

                <AnimatedSection animation="fadeIn" delay={500} sx={{ mt: 10 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 6,
                            textAlign: "center",
                            background:
                                "linear-gradient(135deg, rgba(250, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%)",
                            borderRadius: 4
                        }}
                    >
                        <Typography variant="h5" gutterBottom fontWeight={700}>
                            Looking for Press Materials?
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Download our press kit with logos, screenshots, and company information.
                        </Typography>
                        <Button variant="contained" size="large">
                            Download Press Kit
                        </Button>
                    </Paper>
                </AnimatedSection>
            </Container>
        </PageLayout>
    );
};

export default Contact;
