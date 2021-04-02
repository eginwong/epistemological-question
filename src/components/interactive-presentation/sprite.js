import React from "react";
import "./sprite.css";
import PropTypes from "prop-types";

// TODO: refactor as enum
function Sprite({ spriteState }) {
  return (
    <section className="interaction py-8">
      <div className={`sprite ${spriteState}`}></div>
    </section>
  );
}

Sprite.propTypes = {
  spriteState: PropTypes.string.isRequired,
};

export default Sprite;
