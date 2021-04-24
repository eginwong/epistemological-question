import React from "react";
import PropTypes from "prop-types";

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

export default Card;
