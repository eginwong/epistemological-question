import React from "react";
import PropTypes from "prop-types";
import SlideNumber from "./slideNumber";
// import Sprite from "./sprite";
// import { SpriteStates } from "./spriteStates";
import Background from "./background";
import Transcript from "./transcript";
import SlideContents from "./slideContents";

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

function Slide({
  number,
  type,
  contents,
  styles = {},
  backgroundStyles = {},
  showTranscript = false,
}) {
  // const spriteId = "slide-sprite";
  // const spriteSize = 2;

  // useEffect(() => {
  //   const spriteElt = document.getElementById(spriteId);
  //   spriteElt.style.transform = `scale(${spriteSize}) translateX(${10}px)${" scaleX(-1)"}`;
  // }, []);

  return (
    <>
      <Background styles={backgroundStyles}>
        <SlideContents type={type} contents={contents} styles={styles} />
        {/* <Sprite
          id={spriteId}
          spriteState={slide.spriteMovement || SpriteStates.IDLE}
        /> */}
        <SlideNumber num={number} />
      </Background>
      {!showTranscript || <Transcript noteText={contents.notes} />}
    </>
  );
}

Slide.propTypes = {
  number: PropTypes.number.isRequired,
  contents: PropTypes.object.isRequired,
  type: PropTypes.string,
  styles: PropTypes.object,
  backgroundStyles: PropTypes.object,
  showTranscript: PropTypes.bool,
};

export default Slide;
