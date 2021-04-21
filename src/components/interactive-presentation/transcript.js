import React from "react";
import PropTypes from "prop-types";
import "./transcript.css";

function Transcript({ noteText = "" }) {
  return (
    <div className="flex bg-green-100 p-3 min-h-28 max-h-28 italic overflow-y-auto text-sm whitespace-pre-line">
      <span>{noteText}</span>
    </div>
  );
}

Transcript.propTypes = {
  noteText: PropTypes.string,
};

export default Transcript;
