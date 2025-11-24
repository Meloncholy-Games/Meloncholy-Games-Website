import { Box, Grid, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface Stat {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

interface StatsCounterProps {
    stats: Stat[];
}

const StatsCounter = ({ stats }: StatsCounterProps) => {
    return (
        <Grid container spacing={3}>
            {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <AnimatedSection animation="scale" delay={index * 100}>
                        <StatItem stat={stat} />
                    </AnimatedSection>
                </Grid>
            ))}
        </Grid>
    );
};

const StatItem = ({ stat }: { stat: Stat }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        const stepDuration = duration / steps;

        let currentCount = 0;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= stat.value) {
                setCount(stat.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, stat.value]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`stat-${stat.label}`);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [stat.label]);

    return (
        <Paper
            id={`stat-${stat.label}`}
            elevation={2}
            sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                }}
            >
                {stat.prefix}
                {count.toLocaleString()}
                {stat.suffix}
            </Typography>
            <Typography variant="body1" color="text.secondary" fontWeight={600}>
                {stat.label}
            </Typography>
        </Paper>
    );
};

export default StatsCounter;
