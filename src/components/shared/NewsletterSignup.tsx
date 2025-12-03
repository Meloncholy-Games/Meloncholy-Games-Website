import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type NewsletterSignupProps = {
    variant?: "inline" | "card";
};

const NewsletterSignup = ({ variant = "card" }: NewsletterSignupProps) => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log("Newsletter signup:", email);
        setSubmitted(true);
        setTimeout(() => {
            setEmail("");
            setSubmitted(false);
        }, 3000);
    };

    if (variant === "inline") {
        return (
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" } }}
            >
                <TextField
                    fullWidth
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                    variant="outlined"
                    sx={{ bgcolor: "background.paper" }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={submitted ? <CheckCircleIcon /> : <EmailIcon />}
                    sx={{ minWidth: 140 }}
                    disabled={submitted}
                >
                    {submitted ? "Subscribed!" : "Subscribe"}
                </Button>
            </Box>
        );
    }

    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                textAlign: "center",
                background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
            }}
        >
            <EmailIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" gutterBottom fontWeight={700}>
                Stay in the Loop
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Subscribe to our newsletter for the latest updates, dev blogs, and exclusive sneak
                peeks.
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" } }}
            >
                <TextField
                    fullWidth
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={submitted ? <CheckCircleIcon /> : <EmailIcon />}
                    sx={{ minWidth: 140 }}
                    disabled={submitted}
                >
                    {submitted ? "Subscribed!" : "Subscribe"}
                </Button>
            </Box>
        </Paper>
    );
};

export default NewsletterSignup;
