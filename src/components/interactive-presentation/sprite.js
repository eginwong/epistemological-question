import React from "react";
import "./sprite.css";
import PropTypes from "prop-types";

function Sprite({ id, spriteState, overlay = false }) {
  const customStyle = overlay ? ` absolute` : '';
  return (
      <div id={id} className={`sprite ${spriteState} bottom-4${customStyle}`}></div>
  );
}

Sprite.propTypes = {
  spriteState: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  overlay: PropTypes.bool,
};

export default Sprite;
