import { render, screen } from '@testing-library/react';
import App from '../../src/app/App';
import { fireClickEvent } from '../utils/fireClickEvent';
import { mockGraphs } from 'react-obsidian';
import { FrameworkGraphForIntegrationTests } from './fakes/FrameworkGraphForIntegrationTests';

describe('App', () => {
  beforeEach(() => {
    mockGraphs({ FrameworkGraph: FrameworkGraphForIntegrationTests });
  });

  it('should show the initial player', () => {
    render(<App />);
    expect(screen.getByText('Next player: X')).toBeDefined();
  });

  it('should show the next player', () => {
    render(<App />);
    clickOnSquare(0, 0);
    expect(screen.getByText('Next player: O')).toBeDefined();
  });

  it('should be able to win a game', () => {
    render(<App />);
    clickOnSquare(0, 0); // x
    clickOnSquare(0, 1); // o
    clickOnSquare(1, 0); // x
    clickOnSquare(1, 1); // o
    clickOnSquare(2, 0); // x
    expect(screen.getByText('Winner: X')).toBeDefined();
  });

  function clickOnSquare(x: number, y: number) {
    fireClickEvent(`square-${y * 3 + x}`);
  }
});
