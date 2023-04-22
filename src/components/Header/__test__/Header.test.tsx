import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("App component", () => {
  //https://stackoverflow.com/questions/70805929/how-to-fix-error-usehref-may-be-used-only-in-the-context-of-a-router-compon

  it("renders Heading Test correctly", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/The Daily Chow/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const { container } = render(<Header />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });

  it("renders link correctly", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const logo = screen.getByRole("link");
    expect(logo).toHaveAttribute("href", "/");
  });
});
