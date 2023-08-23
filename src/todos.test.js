import { render, screen } from "@testing-library/react";
import { Todos } from "./todos";

describe("Tests todos component", () => {
  test("Display input field", () => {
    render(<Todos />);

    const todoInputElement = screen.getByTestId("todo-input");
    expect(todoInputElement).toBeInTheDocument();
    expect(todoInputElement).toBeRequired();
    expect(todoInputElement).toHaveAttribute("placeholder");
  });

  test("Display button", () => {
    render(<Todos />);

    const inputElement = screen.getByTestId("todo-button");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveTextContent("Add");
  });
});