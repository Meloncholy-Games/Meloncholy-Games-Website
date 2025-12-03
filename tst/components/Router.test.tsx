import { render, screen } from "@testing-library/react";
import Router from "../../src/components/Router";

describe("Router", () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn()
            }))
        });

        global.IntersectionObserver = class IntersectionObserver {
            constructor() {}
            observe() {}
            unobserve() {}
            disconnect() {}
            readonly root = null;
            readonly rootMargin = "";
            readonly thresholds = [];
            takeRecords = () => [];
        } as any;
    });

    it("renders without crashing", () => {
        render(<Router />);
        expect(document.body).toBeInTheDocument();
    });

    it("renders home page by default", () => {
        render(<Router />);
        expect(screen.getAllByText(/Meloncholy Games/i)[0]).toBeInTheDocument();
    });
});
