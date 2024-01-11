import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import fantasy from "../data/fantasy.json";

describe("check the cards of books", () => {
  it("check if the number of cards rendered is correct", () => {
    render(<App />);

    const cards = screen.queryAllByTestId(/cardItem/i);

    expect(cards).toHaveLength(fantasy.length);
  });
});

describe("check comments area", () => {
  it("check if the comments area get opened", () => {
    render(<App />);

    const cardForTest = screen.queryAllByTestId(/cardItem/i);

    fireEvent.click(cardForTest[Math.floor(Math.random() * cardForTest.length)]);

    const commentArea = screen.getByTestId(/commentarea/i);

    expect(commentArea).toBeInTheDocument();
  });
});
