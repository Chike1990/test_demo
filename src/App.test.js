// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render App", () => {
  render(<App />);

  const appContainer = screen.getByTitle("App");
  expect(appContainer).toBeInTheDocument();
});