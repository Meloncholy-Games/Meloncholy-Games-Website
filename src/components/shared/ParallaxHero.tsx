import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type ParallaxHeroProps = {
    title: string;
    subtitle?: string;
    height?: string;
    backgroundImage?: string;
    backgroundColor?: string;
}

const ParallaxHero = ({
    title,
    subtitle,
    height = "60vh",
    backgroundImage,
    backgroundColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}: ParallaxHeroProps) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll); };
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                height,
                overflow: "hidden",
                background: backgroundColor,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.4)"
                }
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    transform: `translateY(${scrollY * 0.5}px)`,
                    transition: "transform 0.1s ease-out",
                    textAlign: "center"
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "2.5rem", md: "4rem" },
                        fontWeight: 900,
                        color: "white",
                        mb: 2,
                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                    }}
                >
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: "1.2rem", md: "1.8rem" },
                            color: "rgba(255, 255, 255, 0.9)",
                            fontWeight: 300,
                            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Container>
        </Box>
    );
};

export default ParallaxHero;
