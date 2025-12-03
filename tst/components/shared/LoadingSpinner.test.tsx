import { render, screen } from "@testing-library/react";
import LoadingSpinner from "../../../src/components/shared/LoadingSpinner";

describe("LoadingSpinner", () => {
    it("renders with default message", () => {
        render(<LoadingSpinner />);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders with custom message", () => {
        render(<LoadingSpinner message="Please wait" />);

        expect(screen.getByText("Please wait")).toBeInTheDocument();
    });

    it("renders without message when message is empty string", () => {
        render(<LoadingSpinner message="" />);

        expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });

    it("renders CircularProgress component", () => {
        const { container } = render(<LoadingSpinner />);
        const circularProgress = container.querySelector(".MuiCircularProgress-root");

        expect(circularProgress).toBeInTheDocument();
    });
});
