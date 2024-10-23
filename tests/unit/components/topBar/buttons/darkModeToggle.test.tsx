import { render } from '@testing-library/react';
import { topBarViewModel } from '../../../../../src/components/topBar/model/topBarViewModel';
import { fireClickEvent } from '../../../../utils/fireClickEvent';
import { DarkModeToggle_ as DarkModeToggle } from '../../../../../src/components/topBar/buttons/darkModeToggle';

describe('DarkModeToggle', () => {
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
    render(<DarkModeToggle useViewModel={viewModel} />);

    fireClickEvent('darkModeToggle');

    expect(toggleDarkMode).toHaveBeenCalled();
  });
});
