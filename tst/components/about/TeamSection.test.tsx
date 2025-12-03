import { render, screen } from "@testing-library/react";
import TeamSection from "../../../src/components/about/TeamSection";

describe("TeamSection", () => {
    it("renders the section title", () => {
        render(<TeamSection />);

        expect(screen.getByText("Meet the Team")).toBeInTheDocument();
    });

    it("renders all team members", () => {
        render(<TeamSection />);

        expect(screen.getByText("Alex Chen")).toBeInTheDocument();
        expect(screen.getByText("Jordan Rivera")).toBeInTheDocument();
        expect(screen.getByText("Sam Taylor")).toBeInTheDocument();
        expect(screen.getByText("Morgan Lee")).toBeInTheDocument();
    });

    it("renders team member roles", () => {
        render(<TeamSection />);

        expect(screen.getByText("Lead Developer & Co-Founder")).toBeInTheDocument();
        expect(screen.getByText("Art Director & Co-Founder")).toBeInTheDocument();
        expect(screen.getByText("Sound Designer")).toBeInTheDocument();
        expect(screen.getByText("Producer & Community Manager")).toBeInTheDocument();
    });

    it("renders team member bios", () => {
        render(<TeamSection />);

        expect(screen.getByText(/Full-stack developer with a passion/i)).toBeInTheDocument();
        expect(screen.getByText(/Visual artist bringing worlds to life/i)).toBeInTheDocument();
    });

    it("renders skill chips for team members", () => {
        render(<TeamSection />);

        expect(screen.getByText("Game Development")).toBeInTheDocument();
        expect(screen.getByText("Character Design")).toBeInTheDocument();
        expect(screen.getByText("Music Composition")).toBeInTheDocument();
        expect(screen.getByText("Project Management")).toBeInTheDocument();
    });
});
