import { render, screen } from "@testing-library/react";
import BlogCard from "../../../src/components/shared/BlogCard";

describe("BlogCard", () => {
    const defaultProps = {
        title: "Test Blog Post",
        excerpt: "This is a test excerpt for the blog post",
        date: "2024-01-15",
        category: "Development"
    };

    it("renders with required props", () => {
        render(<BlogCard {...defaultProps} />);
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
        expect(screen.getByText("This is a test excerpt for the blog post")).toBeInTheDocument();
        expect(screen.getByText("2024-01-15")).toBeInTheDocument();
        expect(screen.getByText("Development")).toBeInTheDocument();
    });

    it("displays default read time when not provided", () => {
        render(<BlogCard {...defaultProps} />);
        expect(screen.getByText("5 min read")).toBeInTheDocument();
    });

    it("displays custom read time when provided", () => {
        render(<BlogCard {...defaultProps} readTime="10 min read" />);
        expect(screen.getByText("10 min read")).toBeInTheDocument();
    });

    it('renders "Read More" button', () => {
        render(<BlogCard {...defaultProps} />);
        expect(screen.getByText("Read More")).toBeInTheDocument();
    });

    it("uses gradient background when no image is provided", () => {
        const { container } = render(<BlogCard {...defaultProps} />);
        const cardMedia = container.querySelector(".MuiCardMedia-root");
        expect(cardMedia).toHaveTextContent("📰");
    });

    it("renders with custom image", () => {
        render(<BlogCard {...defaultProps} image="/test-image.jpg" />);
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
    });
});
