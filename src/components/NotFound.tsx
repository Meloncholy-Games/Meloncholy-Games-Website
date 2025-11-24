import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageLayout from "./shared/PageLayout";
import HomeIcon from "@mui/icons-material/Home";

const NotFound = () => {
    return (
        <PageLayout>
            <Container>
                <Box
                    sx={{
                        minHeight: "70vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        py: 8,
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "6rem", md: "10rem" },
                            fontWeight: 900,
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 2,
                        }}
                    >
                        404
                    </Typography>
                    <Typography variant="h3" gutterBottom fontWeight={700} sx={{ mb: 2 }}>
                        Page Not Found
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
                        Looks like you've wandered into uncharted territory. The page you're looking for doesn't exist!
                    </Typography>
                    <Box sx={{ fontSize: "5rem", mb: 4 }}>🍉</Box>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        size="large"
                        startIcon={<HomeIcon />}
                        sx={{ px: 4 }}
                    >
                        Back to Home
                    </Button>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default NotFound;
