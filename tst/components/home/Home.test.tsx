import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../../src/components/home/Home';

describe('Home', () => {
  const renderHome = () => {
    return render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  };

  it('renders the title', () => {
    renderHome();
    expect(screen.getByText('Meloncholy Games')).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    renderHome();
    expect(screen.getByText(/Welcome to the Meloncholy Games website/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderHome();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Project-Cantaloupe')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    const { container } = renderHome();
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
  });
});
