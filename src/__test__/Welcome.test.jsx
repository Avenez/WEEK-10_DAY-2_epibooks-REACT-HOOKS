import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Is Welcome mounted correctly", () => {
  it("mounte Welcome component", () => {
    render(<Welcome />);

    const headWelcome = screen.getByText(/Benvenuti in EpiBooks!/i);

    expect(headWelcome).toBeInTheDocument();
  });
});
