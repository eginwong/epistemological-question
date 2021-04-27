import React from "react";
import PropTypes from "prop-types";
import "./background.css";
import alley from "../../images/backgrounds/alley-way.jpg";
import city from "../../images/backgrounds/city.png";
import chalkboard from "../../images/backgrounds/chalkboard.png";
import darkSplit from "../../images/backgrounds/dark-1-2.png";
import descartes from "../../images/backgrounds/rene-descartes.jpg";
import mindBodySchematics from "../../images/backgrounds/mind-body-schematics.jpg";
import physicalism from "../../images/backgrounds/physicalism.jpg";
import silhouettes from "../../images/backgrounds/silhouettes.jpg";
import starryNight from "../../images/backgrounds/starry-night.jpg";
import sunset from "../../images/backgrounds/sunset.jpg";
import triuneKnowledge from "../../images/backgrounds/triune-knowledge.png";

/**
 * need to save some css from getting stripped!
 * PurgeCSS:
 * bg-red-400
 * bg-green-400
 * bg-yellow-400
 * bg-gray-400
 * bg-purple-400
 * bg-indigo-400
 * bg-blue-400
 * bg-pink-400
 */

const mapBackgroundImages = (key) => {
  switch (key) {
    case "alley":
      return alley;
    case "chalkboard":
      return chalkboard;
    case "city":
      return city;
    case "dark-split":
      return darkSplit;
    case "descartes":
      return descartes;
    case "mind-body-schematics":
      return mindBodySchematics;
    case "physicalism":
      return physicalism;
    case "silhouettes":
      return silhouettes;
    case "starry-night":
      return starryNight;
    case "sunset":
      return sunset;
    case "triune-knowledge":
      return triuneKnowledge;
  }
};

function Background({ children, styles }) {
  let customStyles = styles.transition ? " background-slow-transition" : "";
  customStyles += styles.vTransition
    ? " background-slow-vertical-transition"
    : "";
  return (
    <div
      className={`relative flex flex-col flex-1 justify-between	bg-cover ${customStyles}`}
      style={
        styles.image
          ? { backgroundImage: `url(${mapBackgroundImages(styles.image)})` }
          : {}
      }
    >
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
};

export default Background;
