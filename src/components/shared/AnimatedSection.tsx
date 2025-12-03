import { Box, BoxProps, SxProps, Theme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
    animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
    delay?: number;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
} & Omit<BoxProps, "sx">

const AnimatedSection = ({
    animation = "fadeIn",
    delay = 0,
    children,
    sx,
    ...props
}: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => { setIsVisible(true); }, delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay]);

    const getAnimationStyles = () => {
        const baseStyles = {
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
        };

        if (!isVisible) {
            switch (animation) {
                case "fadeIn":
                    return { ...baseStyles, opacity: 0 };
                case "slideUp":
                    return { ...baseStyles, opacity: 0, transform: "translateY(50px)" };
                case "slideLeft":
                    return { ...baseStyles, opacity: 0, transform: "translateX(50px)" };
                case "slideRight":
                    return { ...baseStyles, opacity: 0, transform: "translateX(-50px)" };
                case "scale":
                    return { ...baseStyles, opacity: 0, transform: "scale(0.9)" };
                default:
                    return baseStyles;
            }
        }

        return { ...baseStyles, opacity: 1, transform: "none" };
    };

    const combinedSx: SxProps<Theme> = sx
        ? Array.isArray(sx)
            ? [getAnimationStyles()].concat(sx)
            : [getAnimationStyles(), sx]
        : getAnimationStyles();

    return (
        <Box ref={sectionRef} sx={combinedSx} {...props}>
            {children}
        </Box>
    );
};

export default AnimatedSection;
