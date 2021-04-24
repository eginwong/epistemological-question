import React from "react";
import PropTypes from "prop-types";
import "./background.css";

// https://wallpaperaccess.com/8-bit-city
function Background({ children, imageUrl, transition = false }) {
  return (
    <div
      className={`relative flex flex-col flex-1 justify-between	bg-cover${
        transition ? " background-slow-transition" : ""
      }`}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.any,
  imageUrl: PropTypes.string,
  transition: PropTypes.bool,
};

export default Background;
