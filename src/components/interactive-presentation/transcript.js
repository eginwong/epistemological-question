import React from "react";
import PropTypes from "prop-types";

function Transcript({ noteText = "" }) {
  return (
    <div className="flex h-12 italic overflow-y-auto text-sm whitespace-pre-line">
      <span>{noteText}</span>
    </div>
  );
}

Transcript.propTypes = {
  noteText: PropTypes.string,
};

export default Transcript;
