import React from "react";
import "./sprite.css";
import PropTypes from "prop-types";

function Sprite({ id, type, styles = {} }) {
  let customStyle = styles.overlay ? ` absolute` : "";
  return (
    <>
      <div
        id={id}
        className={`base-sprite ${type}-sprite bottom-4 sprite-centered ${customStyle}`}
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
