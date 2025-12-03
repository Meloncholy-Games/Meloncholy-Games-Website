import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsletterSignup from '../../../src/components/shared/NewsletterSignup';

describe('NewsletterSignup', () => {
  it('renders card variant by default', () => {
    render(<NewsletterSignup />);
    expect(screen.getByText('Stay in the Loop')).toBeInTheDocument();
  });

  it('renders inline variant when specified', () => {
    render(<NewsletterSignup variant="inline" />);
    expect(screen.queryByText('Stay in the Loop')).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('updates email input value', async () => {
    const user = userEvent.setup();
    render(<NewsletterSignup />);

    const emailInput = screen.getByPlaceholderText('Enter your email') as HTMLInputElement;
    await user.type(emailInput, 'test@example.com');

    expect(emailInput.value).toBe('test@example.com');
  });

  it('shows success message after submission', async () => {
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<NewsletterSignup />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: /subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);

    expect(screen.getByText('Subscribed!')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith('Newsletter signup:', 'test@example.com');

    consoleSpy.mockRestore();
  });

  it('disables submit button when submitted', async () => {
    const user = userEvent.setup();
    render(<NewsletterSignup />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: /subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it('requires email to be provided', () => {
    render(<NewsletterSignup />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    expect(emailInput).toHaveAttribute('required');
  });
});
