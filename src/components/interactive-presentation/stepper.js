import PropTypes from "prop-types";
import React from "react";

function Stepper({ maxCount }) {
  return (
    <div>
      <input
        className="invisible w-full"
        type="range"
        id="stepper"
        name="slide-number"
        defaultValue="0"
        min="0"
        max={maxCount}
      />
    </div>
  );
}

Stepper.propTypes = {
  maxCount: PropTypes.number.isRequired,
};

export default Stepper;
