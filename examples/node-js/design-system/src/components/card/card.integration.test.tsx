import { render, screen } from '@testing-library/react';
import Button from '../button/button';
import Card from './card';

describe('Card', () => {
  it('should render the expected card', () => {
    render(<Card><Button>Hello world</Button></Card>);

    const button = screen.getByRole('button', {
      name: 'Hello world',
    });

    expect(button).not.toBeInTheDocument();
  });
});