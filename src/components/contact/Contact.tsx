import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    TextField,
    Button,
    Paper,
    useTheme
} from "@mui/material";
import { useState } from "react";
import PageLayout from "../shared/PageLayout";
import AnimatedSection from "../shared/AnimatedSection";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "@mui/icons-material/Forum";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const Contact = () => {
    const theme = useTheme();
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
            icon: <EmailIcon sx={{ fontSize: 36, color: "text.primary" }} />,
            title: "Email Us",
            description: "For business inquiries and support",
            contact: "hello@meloncholy.games",
            action: "Send Email"
        },
        {
            icon: <DiscordIcon sx={{ fontSize: 36, color: "text.primary" }} />,
            title: "Discord Community",
            description: "Join our community and chat with us",
            contact: "discord.gg/meloncholygames",
            action: "Join Server"
        },
        {
            icon: <TwitterIcon sx={{ fontSize: 36, color: "text.primary" }} />,
            title: "Twitter",
            description: "Follow for updates and announcements",
            contact: "@MeloncholyGames",
            action: "Follow Us"
        },
        {
            icon: <GitHubIcon sx={{ fontSize: 36, color: "text.primary" }} />,
            title: "GitHub",
            description: "Check out our open source projects",
            contact: "github.com/meloncholy-games",
            action: "View Profile"
        }
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
                            sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" }, mb: 2 }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, fontWeight: 400 }}
                        >
                            We'd love to hear from you
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimatedSection animation="slideRight">
                            <Typography
                                variant="h3"
                                gutterBottom
                                fontWeight={600}
                                sx={{ fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                            >
                                Send Us a Message
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 5, lineHeight: 1.7, fontSize: "1.0625rem" }}
                            >
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
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        endIcon={<SendIcon />}
                                        sx={{ px: 4 }}
                                    >
                                        Send Message
                                    </Button>
                                </motion.div>
                            </Box>
                        </AnimatedSection>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimatedSection animation="slideLeft">
                            <Typography
                                variant="h3"
                                gutterBottom
                                fontWeight={600}
                                sx={{ mb: 5, fontSize: { xs: "1.875rem", md: "2.25rem" } }}
                            >
                                Other Ways to Connect
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                                {contactMethods.map((method, index) => (
                                    <AnimatedSection
                                        animation="slideUp"
                                        delay={index * 100}
                                        key={index}
                                    >
                                        <motion.div whileHover={{ y: -3 }}>
                                            <Card>
                                                <CardContent sx={{ p: 3 }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "flex-start",
                                                            gap: 2.5
                                                        }}
                                                    >
                                                        <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                                                            {method.icon}
                                                        </Box>
                                                        <Box sx={{ flexGrow: 1 }}>
                                                            <Typography
                                                                variant="h6"
                                                                fontWeight={600}
                                                                gutterBottom
                                                                sx={{ fontSize: "1.25rem" }}
                                                            >
                                                                {method.title}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                                sx={{ mb: 1.5, lineHeight: 1.6 }}
                                                            >
                                                                {method.description}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                fontWeight={500}
                                                                sx={{
                                                                    mb: 2,
                                                                    color: "text.primary"
                                                                }}
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
                                        </motion.div>
                                    </AnimatedSection>
                                ))}
                            </Box>
                        </AnimatedSection>
                    </Grid>
                </Grid>

                <AnimatedSection animation="fadeIn" delay={500} sx={{ mt: 12 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 6, md: 8 },
                            textAlign: "center",
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 3,
                            backgroundColor: "background.paper"
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            fontWeight={600}
                            sx={{ fontSize: { xs: "1.5rem", md: "1.875rem" } }}
                        >
                            Looking for Press Materials?
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 4, lineHeight: 1.7, fontSize: "1.0625rem" }}
                        >
                            Download our press kit with logos, screenshots, and company information.
                        </Typography>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button variant="contained" size="large" sx={{ px: 4 }}>
                                Download Press Kit
                            </Button>
                        </motion.div>
                    </Paper>
                </AnimatedSection>
            </Container>
        </PageLayout>
    );
};

export default Contact;
