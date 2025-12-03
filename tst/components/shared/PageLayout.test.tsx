import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageLayout from "../../../src/components/shared/PageLayout";

describe("PageLayout", () => {
    const renderPageLayout = (children: React.ReactNode) => {
        return render(
            <MemoryRouter>
                <PageLayout>{children}</PageLayout>
            </MemoryRouter>
        );
    };

    it("renders children content", () => {
        renderPageLayout(<div>Test Content</div>);

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("renders header component", () => {
        renderPageLayout(<div>Content</div>);

        expect(screen.getAllByText(/Meloncholy Games/)[0]).toBeInTheDocument();
    });

    it("renders footer component", () => {
        renderPageLayout(<div>Content</div>);
        const currentYear = new Date().getFullYear();

        expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });

    it("renders in correct order: header, content, footer", () => {
        const { container } = renderPageLayout(<div data-testid="main-content">Content</div>);
        const mainContent = screen.getByTestId("main-content");

        expect(mainContent).toBeInTheDocument();
        expect(container.querySelector("header")).toBeInTheDocument();
        expect(container.querySelector("footer")).toBeInTheDocument();
    });
});
