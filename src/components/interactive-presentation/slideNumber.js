import React from "react";
import PropTypes from "prop-types";

function SlideNumber({ num }) {
  return (
    <div
      className="flex
      justify-center
      content-center
      flex-col
      text-center
      w-10
      h-10
      absolute
      right-5
      bottom-5
      rounded-full
      bg-pink-100"
    >
      {num > 0 ? num : "-"}
    </div>
  );
}

SlideNumber.propTypes = {
  num: PropTypes.number.isRequired,
};

export default SlideNumber;
