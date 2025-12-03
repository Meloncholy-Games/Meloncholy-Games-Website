import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../../src/components/NotFound';

describe('NotFound', () => {
  const renderNotFound = () => {
    return render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders 404 heading', () => {
    renderNotFound();
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders error message', () => {
    renderNotFound();
    expect(screen.getByText(/Oops! Lost in the Game World/i)).toBeInTheDocument();
  });

  it('renders melon emoji', () => {
    renderNotFound();
    expect(screen.getByText('🍉')).toBeInTheDocument();
  });

  it('renders all quick link cards', () => {
    renderNotFound();
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About Us')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Project Cantaloupe')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
  });

  it('renders back to home button', () => {
    renderNotFound();
    expect(screen.getByRole('link', { name: /Back to Home/i })).toBeInTheDocument();
  });

  it('handles melon click', async () => {
    const user = userEvent.setup({ delay: null });
    renderNotFound();

    const melon = screen.getByText('🍉');
    await user.click(melon);

    expect(melon).toBeInTheDocument();
  });
});
