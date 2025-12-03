import { render, screen } from "@testing-library/react";
import FeatureCard from "../../../src/components/shared/FeatureCard";
import { Star } from "@mui/icons-material";

describe("FeatureCard", () => {
    const defaultProps = {
        icon: <Star data-testid="star-icon" />,
        title: "Test Feature",
        description: "This is a test description"
    };

    it("renders with required props", () => {
        render(<FeatureCard {...defaultProps} />);
        expect(screen.getByText("Test Feature")).toBeInTheDocument();
        expect(screen.getByText("This is a test description")).toBeInTheDocument();
        expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    });

    it("renders with custom gradient", () => {
        const customGradient = "linear-gradient(135deg, #ff0000 0%, #00ff00 100%)";
        render(<FeatureCard {...defaultProps} gradient={customGradient} />);
        expect(screen.getByText("Test Feature")).toBeInTheDocument();
    });

    it("renders with delay prop", () => {
        render(<FeatureCard {...defaultProps} delay={100} />);
        expect(screen.getByText("Test Feature")).toBeInTheDocument();
    });
});
