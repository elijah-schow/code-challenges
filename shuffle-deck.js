// Shuffle a deck of cards. The result must be sufficiently random (unbiased).
const shuffleDeck = function (deck) {
  // NOTE: the quality of this function depends on the quality of your browser's
  // implementation of Math.random. Some browsers do a better job than others.
  for (let i = 0; i < deck.length; i++) {
    j = Math.floor(Math.random() * (deck.length - 1));
    const tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }
  return deck;
};
