import { render, screen } from '@testing-library/react';
import Cantaloupe from '../../../src/components/cantaloupe/Cantaloupe';

describe('Cantaloupe', () => {
  it('renders the title', () => {
    render(<Cantaloupe />);
    expect(screen.getByText('Project Cantaloupe')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Cantaloupe />);
    expect(screen.getByText(/This will host the future website/i)).toBeInTheDocument();
  });
});
