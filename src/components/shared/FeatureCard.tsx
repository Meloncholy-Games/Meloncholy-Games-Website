import { Card, CardContent, Typography, Box } from "@mui/material";
import { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    gradient?: string;
    delay?: number;
}

const FeatureCard = ({
    icon,
    title,
    description,
    gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    delay = 0,
}: FeatureCardProps) => {
    return (
        <Card
            sx={{
                height: "100%",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-8px)",
                    "& .icon-wrapper": {
                        transform: "scale(1.1) rotate(5deg)",
                    },
                },
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    background: gradient,
                },
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box
                    className="icon-wrapper"
                    sx={{
                        mb: 2,
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    {icon}
                </Box>
                <Typography variant="h5" gutterBottom fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
