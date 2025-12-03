import { render, screen } from '@testing-library/react';
import App from '../../src/components/App';

describe('App', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    global.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      observe() {}
      unobserve() {}
      disconnect() {}
      readonly root = null;
      readonly rootMargin = '';
      readonly thresholds = [];
      takeRecords = () => [];
    } as any;
  });

  it('exports App component', () => {
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
  });
});
