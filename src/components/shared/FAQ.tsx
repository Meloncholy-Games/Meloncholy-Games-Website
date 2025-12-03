import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

type FAQProps = {
    items: FAQItem[];
};

const FAQ = ({ items }: FAQProps) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            {items.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                        mb: 2,
                        "&:before": { display: "none" },
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            bgcolor:
                                expanded === `panel${index}` ? "primary.main" : "background.paper",
                            color: expanded === `panel${index}` ? "white" : "text.primary",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                bgcolor:
                                    expanded === `panel${index}` ? "primary.dark" : "action.hover"
                            }
                        }}
                    >
                        <Typography variant="h6" fontWeight={600}>
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 3 }}>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQ;
