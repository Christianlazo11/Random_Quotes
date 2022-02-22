import React from "react";
import ButtonCard from "./ButtonCard";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const QuoteBox = ({ color, quote, handleState }) => {
  return (
    <div className="card">
      <h3>
        <FaQuoteLeft /> {quote.quote} <FaQuoteRight />
      </h3>
      <div className="author">
        <span>-{quote.author}</span>
      </div>

      <div className="btn-content">
        <ButtonCard color={color} handleState={handleState} />
      </div>
    </div>
  );
};

export default QuoteBox;
