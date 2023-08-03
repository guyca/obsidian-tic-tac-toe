import { render } from '@testing-library/react';
import { topBarViewModel } from '../../../../src/components/topBar/model/topBarViewModel';
import { _TopBar as TopBar } from '../../../../src/components/topBar/TopBar';
import { fireClickEvent } from '../../../utils/fireClickEvent';

describe('TopBar', () => {
  let viewModel: () => ReturnType<typeof topBarViewModel>;
  let toggleDarkMode: () => void;

  beforeEach(() => {
    toggleDarkMode = jest.fn();

    viewModel = () => {
      return {
        toggleDarkMode,
      };
    };
  });

  it('should render', () => {
    render(<TopBar useViewModel={viewModel} />);

    fireClickEvent('darkModeToggle');

    expect(toggleDarkMode).toHaveBeenCalled();
  });
});
