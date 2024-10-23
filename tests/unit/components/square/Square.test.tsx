import { render, screen } from '@testing-library/react';
import { Square_ as Square } from '../../../../src/components/square/Square';
import { squareViewModel } from '../../../../src/components/square/model/squareViewModel';

describe('Square', () => {
  let useViewModel: squareViewModel;
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    useViewModel = () => {
      return {
        text: 'X',
        onClick,
        testId: expect.anything(),
      };
    };
  });

  it('should render text', () => {
    render(<Square useViewModel={useViewModel} />);
    expect(screen.getAllByText('X').length).toBe(1);
  });

  it('should delegate onClick to viewModel', () => {
    render(<Square useViewModel={useViewModel} />);
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
