import { render, screen } from '@testing-library/react';
import { Board } from '../../../../src/components/board/Board';

describe('Board', () => {
  it('should render 9 squares', () => {
    render(<Board />);
    expect(screen.getAllByRole('button').length).toBe(9);
  });
});
