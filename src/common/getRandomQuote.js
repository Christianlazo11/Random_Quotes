import quotes from "../quotes.json";

const getRandomQuote = () => {
  const numberRandom = Math.floor(Math.random() * (quotes.length - 1) + 1);

  return quotes[numberRandom];
};

export default getRandomQuote;
