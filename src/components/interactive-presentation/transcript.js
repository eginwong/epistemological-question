import React from "react";
import PropTypes from "prop-types";
import "./transcript.css";

function Transcript({ noteText = "" }) {
  return (
    <div className="flex min-height-100 italic overflow-y-auto text-sm whitespace-pre-line">
      <span>{noteText}</span>
    </div>
  );
}

Transcript.propTypes = {
  noteText: PropTypes.string,
};

export default Transcript;
