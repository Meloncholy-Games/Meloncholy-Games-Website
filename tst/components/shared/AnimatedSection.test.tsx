import { render, screen } from '@testing-library/react';
import AnimatedSection from '../../../src/components/shared/AnimatedSection';

describe('AnimatedSection', () => {
  beforeEach(() => {
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

  it('renders children', () => {
    render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies fadeIn animation by default', () => {
    const { container } = render(
      <AnimatedSection>
        <div>Test</div>
      </AnimatedSection>
    );
    const box = container.firstChild as HTMLElement;
    expect(box).toBeInTheDocument();
  });

  it('accepts custom animation type', () => {
    render(
      <AnimatedSection animation="slideUp">
        <div>Test</div>
      </AnimatedSection>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('accepts delay prop', () => {
    render(
      <AnimatedSection delay={500}>
        <div>Test</div>
      </AnimatedSection>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('accepts custom sx prop', () => {
    render(
      <AnimatedSection sx={{ padding: '20px' }}>
        <div>Test</div>
      </AnimatedSection>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('accepts all animation types', () => {
    const animations = ['fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scale'] as const;

    animations.forEach((animation) => {
      const { unmount } = render(
        <AnimatedSection animation={animation}>
          <div>{animation}</div>
        </AnimatedSection>
      );
      expect(screen.getByText(animation)).toBeInTheDocument();
      unmount();
    });
  });
});
