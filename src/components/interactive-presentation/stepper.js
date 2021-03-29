import PropTypes from "prop-types";
import React from "react";

function Stepper({ maxCount, changeCallback }) {
  return (
    <div>
      <input
        className="w-full"
        type="range"
        id="stepper"
        name="slide-number"
        onChange={changeCallback}
        defaultValue="0"
        min="0"
        max={maxCount}
      />
    </div>
  );
}

Stepper.propTypes = {
  maxCount: PropTypes.number.isRequired,
  changeCallback: PropTypes.func,
};

export default Stepper;
