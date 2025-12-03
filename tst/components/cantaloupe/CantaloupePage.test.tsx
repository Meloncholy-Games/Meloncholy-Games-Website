import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CantaloupePage from '../../../src/components/cantaloupe/CantaloupePage';

describe('CantaloupePage', () => {
  const renderCantaloupePage = () => {
    return render(
      <MemoryRouter>
        <CantaloupePage />
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
    renderCantaloupePage();
    expect(screen.getAllByText(/Project Cantaloupe/i)[0]).toBeInTheDocument();
  });

  it('renders "In Development" chip', () => {
    renderCantaloupePage();
    expect(screen.getByText('In Development')).toBeInTheDocument();
  });

  it('renders main heading', () => {
    renderCantaloupePage();
    expect(screen.getByText('An Epic Platforming Journey')).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    renderCantaloupePage();
    expect(screen.getByText('Watch Trailer')).toBeInTheDocument();
    expect(screen.getByText('Wishlist on Steam')).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    renderCantaloupePage();
    expect(screen.getByText('Engaging Gameplay')).toBeInTheDocument();
    expect(screen.getByText('Handcrafted Levels')).toBeInTheDocument();
    expect(screen.getByText('Unique Art Style')).toBeInTheDocument();
    expect(screen.getByText('Original Soundtrack')).toBeInTheDocument();
  });

  it('renders "What to Expect" section', () => {
    renderCantaloupePage();
    expect(screen.getByText('What to Expect')).toBeInTheDocument();
    expect(screen.getByText(/Explore vast, interconnected worlds/i)).toBeInTheDocument();
  });

  it('renders preview gallery', () => {
    renderCantaloupePage();
    expect(screen.getByText('Preview Gallery')).toBeInTheDocument();
    expect(screen.getByText('Lush Forest World')).toBeInTheDocument();
    expect(screen.getByText('Crystal Caverns')).toBeInTheDocument();
  });

  it('renders story section', () => {
    renderCantaloupePage();
    expect(screen.getByText('The Story')).toBeInTheDocument();
  });

  it('renders Stay Updated section', () => {
    renderCantaloupePage();
    expect(screen.getByText('Stay Updated')).toBeInTheDocument();
    expect(screen.getByText('Join Discord')).toBeInTheDocument();
    expect(screen.getByText('Follow on Twitter')).toBeInTheDocument();
  });
});
