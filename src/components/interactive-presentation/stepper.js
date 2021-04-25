import PropTypes from "prop-types";
import React from "react";
import useKeypress from "./hooks/useKeypress";

const incrementToMax = (val, max) => (val + 1 > max ? max : val + 1);
const decrementToMin = (val, min) => (val - 1 < min ? min : val - 1);

function Stepper({ maxCount, onChange }) {
  useKeypress("ArrowRight", () =>
    onChange((slideNumber) => incrementToMax(slideNumber, maxCount))
  );

  useKeypress("ArrowLeft", () =>
    onChange((slideNumber) => decrementToMin(slideNumber, 0))
  );

  return (
    <>
      <input
        className="h-0 invisible w-full"
        type="range"
        id="stepper"
        name="slide-number"
        defaultValue="0"
        min="0"
        max={maxCount}
      />
    </>
  );
}

Stepper.propTypes = {
  maxCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Stepper;
