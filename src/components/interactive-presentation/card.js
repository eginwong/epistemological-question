import React from "react";
import PropTypes from "prop-types";

// purge styles css TODO opacity-70
function Card({ id, content }) {
  return (
    <div
      key={`card-${id}`}
      className="relative bg-white p-2 px-6 rounded-3xl w-128 my-2 shadow-xl"
    >
      <p className="text-xl font-semibold my-2">{content}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.any,
  content: PropTypes.string,
};

function NumberedCard({ id, content, number, highlight = true }) {
  return (
    <div
      key={`card-${id}`}
      className={`relative flex-1 bg-white p-2 px-6 rounded-3xl w-128 my-2 shadow-xl${highlight ? '' : ' opacity-70'}`}
    >
      <div className="text-white flex flex-1 absolute rounded-full p-4 shadow-xl bg-green-400 left-4 -top-6">
        <span className="h-2 w-2 flex items-center justify-center">{number + 1}</span>
      </div>
      <p className="text-xl text-center font-semibold my-2 whitespace-pre-line">{content}</p>
    </div>
  );
}

NumberedCard.propTypes = {
  number: PropTypes.number.isRequired,
  id: PropTypes.any,
  content: PropTypes.string,
  highlight: PropTypes.bool,
};

export {
  Card,
  NumberedCard
};
