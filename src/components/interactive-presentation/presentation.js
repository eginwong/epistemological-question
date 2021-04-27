import React, { useState } from "react";
import Stepper from "./stepper";
import Slide from "./slide";
import useKeypress from "./hooks/useKeypress";
import presentation from "../../data/presentation.json";

function Presentation() {
  const { slides, offset } = presentation;
  const [slideNumber, setSlideNumber] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);

  useKeypress("t", () => {
    setShowTranscript((showTranscript) => !showTranscript);
  });

  const slideComponents = slides.map(
    ({ type, contents, styles, backgroundStyles, sprites }, id) => (
      <Slide
        key={id}
        number={slideNumber - offset}
        type={type}
        contents={contents}
        styles={styles}
        backgroundStyles={backgroundStyles}
        sprites={sprites}
        showTranscript={showTranscript}
      />
    )
  );

  return (
    <>
      {slideComponents[slideNumber]}
      <Stepper maxCount={slides.length - 1} onChange={setSlideNumber} />
    </>
  );
}

export default Presentation;
