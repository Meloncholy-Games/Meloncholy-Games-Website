import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../../../src/components/about/About';

describe('About', () => {
  const renderAbout = () => {
    return render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  };

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

  it('renders the hero section', () => {
    renderAbout();
    expect(screen.getByText('About Meloncholy Games')).toBeInTheDocument();
  });

  it('renders the "Who We Are" section', () => {
    renderAbout();
    expect(screen.getByText('Who We Are')).toBeInTheDocument();
  });

  it('renders the "Our Story" section', () => {
    renderAbout();
    expect(screen.getByText('Our Story')).toBeInTheDocument();
  });

  it('renders all value cards', () => {
    renderAbout();
    expect(screen.getByText('Passion First')).toBeInTheDocument();
    expect(screen.getByText('Community Driven')).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Quality Over Quantity')).toBeInTheDocument();
  });

  it('renders the "What We Do" section', () => {
    renderAbout();
    expect(screen.getByText('What We Do')).toBeInTheDocument();
  });

  it('renders skill chips', () => {
    renderAbout();
    expect(screen.getAllByText('Game Development')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Art & Design')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Sound Design')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Game Design')[0]).toBeInTheDocument();
  });

  it('renders team section', () => {
    renderAbout();
    expect(screen.getByText('Meet the Team')).toBeInTheDocument();
  });
});
