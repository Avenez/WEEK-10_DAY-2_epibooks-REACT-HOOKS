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
  beforeEach(() => {
    render(<App />);
  });

  it("comment area should not to be rendered without a click of a card", () => {
    const commentArea = screen.queryByTestId(/commentarea/i);

    expect(commentArea).not.toBeInTheDocument();
  });

  it("should open the comments area", () => {
    const cardForTest = screen.queryAllByTestId(/cardItem/i);

    fireEvent.click(cardForTest[Math.floor(Math.random() * cardForTest.length)]);

    const commentArea = screen.getByTestId(/commentarea/i);

    expect(commentArea).toBeInTheDocument();
  });

  it("check in comments get loaded correctly", async () => {
    const cards = screen.queryAllByTestId(/cardItem/i);

    // const selectedCard = cards[Math.floor(Math.random() * cards.length)];
    const selectedCard = cards[0];

    fireEvent.click(selectedCard);

    const comments = await screen.findAllByTestId(/SingleComment/i);

    expect(comments.length).toBeGreaterThan(0);
  });
});
