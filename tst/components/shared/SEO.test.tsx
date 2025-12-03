import { render } from "@testing-library/react";
import SEO from "../../../src/components/shared/SEO";

describe("SEO", () => {
    beforeEach(() => {
        document.title = "";
        document.head.innerHTML = `
      <meta name="description" content="" />
      <meta name="keywords" content="" />
    `;
    });

    it("sets default title", () => {
        render(<SEO />);
        expect(document.title).toBe("Meloncholy Games");
    });

    it("sets custom title with suffix", () => {
        render(<SEO title="About Us" />);
        expect(document.title).toBe("About Us | Meloncholy Games");
    });

    it('does not add suffix when title is "Meloncholy Games"', () => {
        render(<SEO title="Meloncholy Games" />);
        expect(document.title).toBe("Meloncholy Games");
    });

    it("sets meta description", () => {
        render(<SEO description="Custom description" />);
        const metaDescription = document.querySelector('meta[name="description"]');
        expect(metaDescription?.getAttribute("content")).toBe("Custom description");
    });

    it("sets meta keywords", () => {
        render(<SEO keywords="game, indie, test" />);
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        expect(metaKeywords?.getAttribute("content")).toBe("game, indie, test");
    });

    it("updates title when props change", () => {
        const { rerender } = render(<SEO title="First Title" />);
        expect(document.title).toBe("First Title | Meloncholy Games");

        rerender(<SEO title="Second Title" />);
        expect(document.title).toBe("Second Title | Meloncholy Games");
    });

    it("renders nothing to the DOM", () => {
        const { container } = render(<SEO />);
        expect(container.firstChild).toBeNull();
    });
});
