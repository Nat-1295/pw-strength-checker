/* eslint-disable no-console */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
      fetch: jest.fn(),
    })),
  });
});

const renderApp = () => render(<App />);

describe('generate a snapshot', () => {
  it("should match the snapshot", () => {
    const {
      container: { firstChild },
    } = renderApp();
    expect(firstChild).toMatchSnapshot();
  });

  it('title text should be visible', () => {
    renderApp();
    expect(screen.getByText("Is your password strong enough?")).toBeTruthy();
  });
});
