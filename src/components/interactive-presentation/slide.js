import React from "react";
import PropTypes from "prop-types";

function Slide({ children }) {
  return <section className="text-center">{children}</section>;
}

Slide.propTypes = {
  children: PropTypes.element,
};

export default Slide;
