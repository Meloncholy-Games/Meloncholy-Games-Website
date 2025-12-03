import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../../src/components/home/HomePage";

describe("HomePage", () => {
    const renderHomePage = () => {
        return render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );
    };

    it("renders the main heading", () => {
        renderHomePage();

        expect(screen.getAllByText(/Meloncholy Games/i)[0]).toBeInTheDocument();
    });

    it("renders the tagline", () => {
        renderHomePage();

        expect(screen.getAllByText(/Crafting unique gaming experiences/i)[0]).toBeInTheDocument();
    });

    it('renders "Discover Our Game" button', () => {
        renderHomePage();

        expect(screen.getByText("Discover Our Game")).toBeInTheDocument();
    });

    it('renders "Learn More" button', () => {
        renderHomePage();

        expect(screen.getAllByText("Learn More")[0]).toBeInTheDocument();
    });

    it('renders "What We\'re About" section', () => {
        renderHomePage();

        expect(screen.getByText(/What We're About/i)).toBeInTheDocument();
    });

    it("renders feature cards", () => {
        renderHomePage();

        expect(screen.getByText("Unique Experiences")).toBeInTheDocument();
        expect(screen.getByText("Community First")).toBeInTheDocument();
        expect(screen.getByText("Always Evolving")).toBeInTheDocument();
    });

    it("renders Project Cantaloupe section", () => {
        renderHomePage();

        expect(screen.getAllByText(/Project Cantaloupe/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/Our first major game is in development/i)).toBeInTheDocument();
    });

    it("renders the melon emoji", () => {
        renderHomePage();

        expect(screen.getByText("🍉")).toBeInTheDocument();
    });

    it("renders contact CTA section", () => {
        renderHomePage();

        expect(screen.getByText("Join Our Journey")).toBeInTheDocument();
        expect(screen.getAllByText("Get In Touch")[0]).toBeInTheDocument();
    });
});
