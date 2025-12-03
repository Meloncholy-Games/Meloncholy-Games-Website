import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQ from "../../../src/components/shared/FAQ";

describe("FAQ", () => {
    const mockItems = [
        { question: "What is this?", answer: "This is a FAQ component" },
        { question: "How does it work?", answer: "It uses accordions" },
        { question: "Can I customize it?", answer: "Yes, you can" }
    ];

    it("renders all FAQ items", () => {
        render(<FAQ items={mockItems} />);

        expect(screen.getByText("What is this?")).toBeInTheDocument();
        expect(screen.getByText("How does it work?")).toBeInTheDocument();
        expect(screen.getByText("Can I customize it?")).toBeInTheDocument();
    });

    it("shows answer when question is clicked", async () => {
        const user = userEvent.setup();
        render(<FAQ items={mockItems} />);

        const firstQuestion = screen.getByText("What is this?");
        await user.click(firstQuestion);

        expect(screen.getByText("This is a FAQ component")).toBeVisible();
    });

    it("handles empty items array", () => {
        const { container } = render(<FAQ items={[]} />);
        const accordions = container.querySelectorAll(".MuiAccordion-root");

        expect(accordions).toHaveLength(0);
    });

    it("renders correct number of accordions", () => {
        const { container } = render(<FAQ items={mockItems} />);
        const accordions = container.querySelectorAll(".MuiAccordion-root");

        expect(accordions).toHaveLength(mockItems.length);
    });
});
