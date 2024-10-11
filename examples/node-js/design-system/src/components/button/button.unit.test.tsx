import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('should render the expected button', () => {
    render(<Button>Hello world</Button>);

    const button = screen.getByRole('button', {
      name: 'Hello world',
    });

    expect(button).toBeInTheDocument();
  });
});