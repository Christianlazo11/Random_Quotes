import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const ButtonCard = ({ color, handleState }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={() => {
        handleState();
      }}
    >
      Next
      <MdDoubleArrow />
    </button>
  );
};

export default ButtonCard;
