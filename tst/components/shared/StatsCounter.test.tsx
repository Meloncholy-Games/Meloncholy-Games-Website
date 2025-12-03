import { render, screen } from "@testing-library/react";
import StatsCounter from "../../../src/components/shared/StatsCounter";

describe("StatsCounter", () => {
    const mockStats = [
        { value: 100, label: "Projects", suffix: "+" },
        { value: 50, label: "Clients", prefix: "$" },
        { value: 75, label: "Hours" }
    ];

    beforeEach(() => {
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

    it("renders all stats", () => {
        render(<StatsCounter stats={mockStats} />);
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Clients")).toBeInTheDocument();
        expect(screen.getByText("Hours")).toBeInTheDocument();
    });

    it("renders all stat labels", () => {
        render(<StatsCounter stats={mockStats} />);
        mockStats.forEach((stat) => {
            expect(screen.getByText(stat.label)).toBeInTheDocument();
        });
    });

    it("renders empty array gracefully", () => {
        const { container } = render(<StatsCounter stats={[]} />);
        expect(container).toBeInTheDocument();
    });
});
