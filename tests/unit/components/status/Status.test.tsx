import { render, screen } from '@testing-library/react';
import { Status_ as Status } from '../../../../src/components/status/Status';
import { StatusViewModel } from '../../../../src/components/status/model/statusViewModel';

describe('Status', () => {
  let useViewModel: StatusViewModel;

  beforeEach(() => {
    useViewModel = () => ({
      status: 'foo',
    });
  });

  it('should render a status', () => {
    render(<Status useViewModel={useViewModel} />);
    expect(screen.getByText('foo')).toBeDefined();
  });
});
