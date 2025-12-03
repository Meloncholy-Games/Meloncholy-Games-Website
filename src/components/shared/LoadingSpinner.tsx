import { Box, CircularProgress, Typography } from "@mui/material";

type LoadingSpinnerProps = {
    message?: string;
    fullScreen?: boolean;
};

const LoadingSpinner = ({ message = "Loading...", fullScreen = false }: LoadingSpinnerProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: fullScreen ? "100vh" : "50vh",
                gap: 2
            }}
        >
            <CircularProgress size={60} thickness={4} />
            {message && (
                <Typography variant="h6" color="text.secondary">
                    {message}
                </Typography>
            )}
        </Box>
    );
};

export default LoadingSpinner;
