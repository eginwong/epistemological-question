import React from "react";
import PropTypes from "prop-types";
import "./transcript.css";

function Transcript({ noteText = "" }) {
  return (
    <div className="flex bg-green-100 mt-2 p-3 min-h-26 max-h-26 italic overflow-y-auto text-sm whitespace-pre-line">
      <span>{noteText}</span>
    </div>
  );
}

Transcript.propTypes = {
  noteText: PropTypes.string,
};

export default Transcript;
