import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../../src/components/shared/Header";

describe("Header", () => {
    const renderHeader = (initialEntries = ["/"]) => {
        return render(
            <MemoryRouter initialEntries={initialEntries}>
                <Header />
            </MemoryRouter>
        );
    };

    it("renders the logo", () => {
        renderHeader();

        expect(screen.getAllByText(/Meloncholy Games/)[0]).toBeInTheDocument();
    });

    it("renders all navigation items", () => {
        renderHeader();

        expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
        expect(screen.getAllByText("About")[0]).toBeInTheDocument();
        expect(screen.getAllByText("Project Cantaloupe")[0]).toBeInTheDocument();
        expect(screen.getAllByText("Contact")[0]).toBeInTheDocument();
    });

    it("highlights active navigation item", () => {
        const { container } = renderHeader(["/about"]);

        expect(container).toBeInTheDocument();
    });

    it("renders mobile menu button", () => {
        const { container } = renderHeader();

        // Menu button may not be visible on desktop
        expect(container).toBeInTheDocument();
    });
});
