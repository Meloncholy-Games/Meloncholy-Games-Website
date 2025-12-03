import { Card, CardContent, Typography, Box, Avatar, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface TestimonialProps {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
    rating?: number;
}

const Testimonial = ({ quote, author, role, avatar, rating }: TestimonialProps) => {
    return (
        <Card
            sx={{
                height: "100%",
                position: "relative",
                p: 2,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "100%",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                }
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2
                    }}
                >
                    <FormatQuoteIcon sx={{ fontSize: 48, color: "primary.main", opacity: 0.3 }} />
                    {rating && <Rating value={rating} readOnly size="small" />}
                </Box>
                <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic", lineHeight: 1.8 }}>
                    "{quote}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                        sx={{
                            width: 50,
                            height: 50,
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        }}
                    >
                        {avatar || author.charAt(0)}
                    </Avatar>
                    <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                            {author}
                        </Typography>
                        {role && (
                            <Typography variant="caption" color="text.secondary">
                                {role}
                            </Typography>
                        )}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Testimonial;
