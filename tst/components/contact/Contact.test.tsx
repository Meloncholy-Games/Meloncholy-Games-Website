import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../../../src/components/contact/Contact';

describe('Contact', () => {
  const renderContact = () => {
    return render(
      <MemoryRouter>
        <Contact />
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
    renderContact();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    const { container } = renderContact();
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders submit button', () => {
    renderContact();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('renders contact methods', () => {
    renderContact();
    expect(screen.getByText('Email Us')).toBeInTheDocument();
    expect(screen.getByText('Discord Community')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders form heading', () => {
    renderContact();
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument();
  });

  it('renders press kit section', () => {
    renderContact();
    expect(screen.getByText('Looking for Press Materials?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Download Press Kit/i })).toBeInTheDocument();
  });
});
