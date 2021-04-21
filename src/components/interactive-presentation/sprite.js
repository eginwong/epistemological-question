import React from "react";
import "./sprite.css";
import PropTypes from "prop-types";

function Sprite({ id, spriteState }) {
  return (
    <div id={id} className={`sprite ${spriteState} absolute bottom-4`}></div>
  );
}

Sprite.propTypes = {
  spriteState: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Sprite;
