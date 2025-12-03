import { render, screen } from '@testing-library/react';
import Testimonial from '../../../src/components/shared/Testimonial';

describe('Testimonial', () => {
  const defaultProps = {
    quote: 'This is an amazing product!',
    author: 'John Doe',
  };

  it('renders quote and author', () => {
    render(<Testimonial {...defaultProps} />);
    expect(screen.getByText('"This is an amazing product!"')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders with role when provided', () => {
    render(<Testimonial {...defaultProps} role="CEO" />);
    expect(screen.getByText('CEO')).toBeInTheDocument();
  });

  it('does not render role when not provided', () => {
    render(<Testimonial {...defaultProps} />);
    expect(screen.queryByText('CEO')).not.toBeInTheDocument();
  });

  it('renders rating when provided', () => {
    const { container } = render(<Testimonial {...defaultProps} rating={5} />);
    const rating = container.querySelector('.MuiRating-root');
    expect(rating).toBeInTheDocument();
  });

  it('does not render rating when not provided', () => {
    const { container } = render(<Testimonial {...defaultProps} />);
    const rating = container.querySelector('.MuiRating-root');
    expect(rating).not.toBeInTheDocument();
  });

  it('renders avatar with first letter of author name when no avatar provided', () => {
    const { container } = render(<Testimonial {...defaultProps} />);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveTextContent('J');
  });
});
