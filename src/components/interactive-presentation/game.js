import React, { useState, useEffect } from "react";
import Stepper from "./stepper";
import Slide from "./slide";
import SlideNumber from "./slideNumber";
import Sprite from "./sprite";
import { SpriteStates } from "./spriteStates";
import Background from "./background";
import Transcript from "./transcript";
import presentation from "../../data/presentation.json";
import cityBackground from "../../images/backgrounds/city-background.png";
import nightSky from "../../images/backgrounds/night-sky.jpg";
import sunset from "../../images/backgrounds/sunset.jpg";
import useKeypress from "./hooks/useKeypress";

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

const incrementToMax = (val, max) => (val + 1 > max ? max : val + 1);
const decrementToMin = (val, min) => (val - 1 < min ? min : val - 1);

function Game() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [showTranscript, setShowTranscript] = useState(true);

  useKeypress("t", () => {
    setShowTranscript((showTranscript) => !showTranscript);
  });

  useKeypress("ArrowRight", () =>
    setSlideNumber((slideNumber) =>
      incrementToMax(slideNumber, presentation.slides.length - 1)
    )
  );

  useKeypress("ArrowLeft", () =>
    setSlideNumber((slideNumber) => decrementToMin(slideNumber, 0))
  );

  const spriteId = "game-sprite";
  const spriteSize = 2;

  useEffect(() => {
    const spriteElt = document.getElementById(spriteId);
    spriteElt.style.transform = `scale(${spriteSize}) translateX(${10}px)${" scaleX(-1)"}`;
  }, []);

  // could think about including sprite movement/effects here
  // or pass an effect that has a specific trigger on the display
  // should pass background too
  const createSlideContents = (id, color, contents, type = "text") => {
    return (
      <React.Fragment key={id}>
        {slideFormatter(type, color, contents)}
      </React.Fragment>
    );
  };

  const mapBackgroundImages = (key) => {
    switch (key) {
      case "city-background":
        return cityBackground;
      case "night-sky":
        return nightSky;
      case "sunset":
        return sunset;
    }
  };

  const slideContents = presentation.slides.map((val, id) => ({
    ...val,
    content: createSlideContents(id, val.color, val.text, val.slideType),
    backgroundImage: mapBackgroundImages(val.backgroundImage),
  }));

  const slide = slideContents[slideNumber];

  return (
    <>
      <Background imageUrl={slide.backgroundImage}>
        <Slide content={slide.content} footnotes={slide.footnotes}></Slide>
        <Sprite
          id={spriteId}
          spriteState={slide.spriteMovement || SpriteStates.IDLE}
        />
        <SlideNumber num={slideNumber - presentation.offset} />
      </Background>
      <Stepper maxCount={slideContents.length - 1} />
      {showTranscript ? <Transcript noteText={slide.notes} /> : <></>}
    </>
  );
}

export default Game;
