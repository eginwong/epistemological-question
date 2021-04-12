import React from "react";
import PropTypes from "prop-types";
import "./background.css";

// https://wallpaperaccess.com/8-bit-city
function Background({ children, imageUrl }) {
  return (
    <div 
      className="flex flex-col flex-1 justify-between	bg-cover background-slow-transition"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.any,
  imageUrl: PropTypes.string
};

export default Background;
