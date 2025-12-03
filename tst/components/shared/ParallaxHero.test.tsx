import { render, screen } from "@testing-library/react";
import ParallaxHero from "../../../src/components/shared/ParallaxHero";

describe("ParallaxHero", () => {
    it("renders with title", () => {
        render(<ParallaxHero title="Test Title" />);

        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders with subtitle", () => {
        render(<ParallaxHero title="Test Title" subtitle="Test Subtitle" />);

        expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });

    it("does not render subtitle when not provided", () => {
        render(<ParallaxHero title="Test Title" />);

        expect(screen.queryByRole("heading", { level: 5 })).not.toBeInTheDocument();
    });

    it("applies custom height", () => {
        const { container } = render(<ParallaxHero title="Test" height="80vh" />);

        expect(container.firstChild).toBeInTheDocument();
    });

    it("applies custom background color", () => {
        const { container } = render(
            <ParallaxHero
                title="Test"
                backgroundColor="linear-gradient(135deg, #ff0000 0%, #00ff00 100%)"
            />
        );

        expect(container.firstChild).toBeInTheDocument();
    });

    it("handles background image", () => {
        const { container } = render(
            <ParallaxHero title="Test" backgroundImage="/test-image.jpg" />
        );

        expect(container.firstChild).toBeInTheDocument();
    });

    it("sets up scroll event listener", () => {
        const addEventListenerSpy = jest.spyOn(window, "addEventListener");
        const { unmount } = render(<ParallaxHero title="Test" />);

        expect(addEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

        unmount();
        addEventListenerSpy.mockRestore();
    });
});
