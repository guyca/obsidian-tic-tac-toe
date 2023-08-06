import { fireEvent, screen } from '@testing-library/react';

export const fireClickEvent = (testId: string) => {
  fireEvent(
    screen.getByTestId(testId),
    new MouseEvent('click', { bubbles: true }),
  );
};
