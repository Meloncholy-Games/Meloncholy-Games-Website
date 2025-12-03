import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../../../src/components/shared/Footer";

describe("Footer", () => {
    const renderFooter = () => {
        return render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
    };

    it("renders the company name", () => {
        renderFooter();
        expect(screen.getAllByText(/Meloncholy Games/)[0]).toBeInTheDocument();
    });

    it("renders current year in copyright", () => {
        renderFooter();
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });

    it("renders all navigation links", () => {
        renderFooter();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About Us")).toBeInTheDocument();
        expect(screen.getByText("Project Cantaloupe")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("renders social media icons", () => {
        renderFooter();
        expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
        expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
        expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("renders company tagline", () => {
        renderFooter();
        expect(screen.getByText(/Crafting unique gaming experiences/i)).toBeInTheDocument();
    });
});
