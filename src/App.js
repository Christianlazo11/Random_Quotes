import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";
import getRandomQuote from "./common/getRandomQuote";
import getRandomColor from "./common/getRandomColor";

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  const changeValues = () => {
    setQuote(getRandomQuote);
    setColor(getRandomColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <QuoteBox quote={quote} color={color} handleState={changeValues} />
    </div>
  );
}

export default App;
