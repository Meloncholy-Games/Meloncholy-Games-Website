import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image?: string;
    readTime?: string;
}

const BlogCard = ({ title, excerpt, date, category, image, readTime = "5 min read" }: BlogCardProps) => {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-8px)",
                    "& .read-more": {
                        transform: "translateX(8px)",
                    },
                },
            }}
        >
            <CardMedia
                component="div"
                sx={{
                    height: 200,
                    background: image
                        ? `url(${image}) center/cover`
                        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                }}
            >
                {!image && "📰"}
            </CardMedia>
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Box sx={{ mb: 2 }}>
                    <Chip label={category} size="small" color="primary" sx={{ mr: 1 }} />
                    <Chip
                        icon={<CalendarTodayIcon sx={{ fontSize: 14 }} />}
                        label={date}
                        size="small"
                        variant="outlined"
                    />
                </Box>
                <Typography variant="h5" gutterBottom fontWeight={700}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {excerpt}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="caption" color="text.secondary">
                        {readTime}
                    </Typography>
                    <Button
                        className="read-more"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ transition: "transform 0.3s ease-in-out" }}
                    >
                        Read More
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
