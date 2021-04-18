import React from "react";
import "./sprite.css";
import PropTypes from "prop-types";

function Sprite({ id, spriteState }) {
  return (
    <section className="py-8">
      <div id={id} className={`sprite ${spriteState}`}></div>
    </section>
  );
}

Sprite.propTypes = {
  spriteState: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Sprite;
