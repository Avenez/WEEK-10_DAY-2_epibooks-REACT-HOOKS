import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import fantasy from "../data/fantasy.json";

const getRandomCard = () => {
  const cards = screen.queryAllByTestId(/cardItem/i);
  return cards[Math.floor(Math.random() * cards.length)];
};

describe("Check the cards of books", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render the correct number of cards", () => {
    const cards = screen.queryAllByTestId(/cardItem/i);

    expect(cards).toHaveLength(fantasy.length);
  });

  describe("Card Selection", () => {
    it("should have a red border when selected", () => {
      const selectedCard = getRandomCard();

      fireEvent.click(selectedCard);

      const computedStyles = window.getComputedStyle(selectedCard);

      expect(computedStyles.borderColor).toBe("red");
    });

    it("should lose red border when another card is selected", () => {
      const selectedCard = getRandomCard();

      fireEvent.click(selectedCard);

      const computedStyles = window.getComputedStyle(selectedCard);

      expect(computedStyles.borderColor).toBe("red");

      const selectedCard2 = getRandomCard();

      fireEvent.click(selectedCard2);

      const computedStyles2 = window.getComputedStyle(selectedCard2);

      const computedStyles3 = window.getComputedStyle(selectedCard);

      expect(computedStyles3.borderColor).not.toBe("red");

      expect(computedStyles2.borderColor).toBe("red");
    });
  });
});

describe("Check comments area", () => {
  it("should open the comments area", () => {
    render(<App />);

    const cardForTest = screen.queryAllByTestId(/cardItem/i);

    fireEvent.click(cardForTest[Math.floor(Math.random() * cardForTest.length)]);

    const commentArea = screen.getByTestId(/commentarea/i);

    expect(commentArea).toBeInTheDocument();
  });
});
