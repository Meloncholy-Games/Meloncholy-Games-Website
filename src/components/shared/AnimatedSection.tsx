import { Box, BoxProps, SxProps, Theme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedSectionProps = {
    animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
    delay?: number;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
} & Omit<BoxProps, "sx">;

const AnimatedSection = ({
    animation = "fadeIn",
    delay = 0,
    children,
    sx,
    ...props
}: AnimatedSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const getAnimationVariants = () => {
        const variants = {
            hidden: {},
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.6,
                    delay: delay / 1000,
                    ease: [0.4, 0, 0.2, 1]
                }
            }
        };

        switch (animation) {
            case "fadeIn":
                variants.hidden = { opacity: 0 };
                break;
            case "slideUp":
                variants.hidden = { opacity: 0, y: 30 };
                break;
            case "slideLeft":
                variants.hidden = { opacity: 0, x: 30 };
                break;
            case "slideRight":
                variants.hidden = { opacity: 0, x: -30 };
                break;
            case "scale":
                variants.hidden = { opacity: 0, scale: 0.95 };
                break;
            default:
                variants.hidden = { opacity: 0 };
        }

        return variants;
    };

    const variants = getAnimationVariants();

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            sx={sx}
            {...props}
        >
            {children}
        </Box>
    );
};

export default AnimatedSection;
