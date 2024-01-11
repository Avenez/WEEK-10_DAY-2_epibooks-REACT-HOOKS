import { render, screen } from "@testing-library/react";
import App from "../App";
import fantasy from "../data/fantasy.json";

describe("check the cards of books", () => {
  it("check if the number of cards rendered is correct", () => {
    render(<App />);

    const cards = screen.queryAllByTestId(/cardItem/i);

    expect(cards).toHaveLength(fantasy.length);
  });
});
