import React from "react";
import "./sprite.css";
import PropTypes from "prop-types";

function Sprite({ id, type, styles = {} }) {
  let customStyle = styles.overlay ? ` absolute` : "";
  // default center the sprite
  customStyle += styles.centered !== false ? " sprite-centered" : "";
  customStyle += styles.defeated ? ` defeated-sprite` : "";
  customStyle += styles.enlarge ? ` large-sprite` : "";
  return (
    <>
      <div
        id={id}
        className={`base-sprite ${type}-sprite bottom-4 ${customStyle}`}
      ></div>
    </>
  );
}

Sprite.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default Sprite;
