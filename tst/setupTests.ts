import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = "";
    readonly thresholds: readonly number[] = [];

    constructor(
        public callback: IntersectionObserverCallback,
        public options?: IntersectionObserverInit
    ) {}

    observe(): void {
        // Mock implementation
    }
    unobserve(): void {
        // Mock implementation
    }
    disconnect(): void {
        // Mock implementation
    }
    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
