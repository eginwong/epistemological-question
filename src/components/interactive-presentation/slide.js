import React from "react";
import PropTypes from "prop-types";
import SlideNumber from "./slideNumber";
import Sprite from "./sprite";
import Background from "./background";
import Transcript from "./transcript";
import SlideContents from "./slideContents";

function Slide({
  number,
  type,
  contents,
  styles = {},
  backgroundStyles = {},
  sprites = [],
  showTranscript = false,
}) {
  return (
    <>
      <Background styles={backgroundStyles}>
        <SlideContents type={type} contents={contents} styles={styles} />
        {!sprites || (
          <div className="flex justify-center space-x-10">
            {sprites.map((sprite, ind) => (
              <Sprite
                id={`${sprite.name}-${ind}`}
                key={`${sprite.name}-${ind}`}
                type={`${sprite.name}`}
                styles={sprite.styles}
              />
            ))}
          </div>
        )}
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
  sprites: PropTypes.array,
};

export default Slide;
