import React, { useState } from "react";
import Stepper from "./stepper";
import Slide from "./slide";
import Sprite from "./sprite";
import KeyDownFunctional from "./key-down-functional";
import "./game.css";

function Game() {
  const [slideNumber, setSlideNumber] = useState(0);
  // const [spriteAnimation, setSpriteAnimation] = useState('idle');

  const slideContents = [
    {
      id: 0,
      content: (
        <React.Fragment key={0}>
          <h2 className="inline-block text-content p-3 mb-4 text-2xl font-bold bg-yellow-400">
            Use ◀️ and ▶️ keys!
          </h2>
        </React.Fragment>
      )
    },
    {
      id: 1,
      content: (
        <React.Fragment key={1}>
          <h2 className="inline-block text-content p-3 mb-4 text-2xl font-bold bg-red-400">
            Slide 2
          </h2>
        </React.Fragment>
      )
    },
    {
      id: 2,
      content: (
        <React.Fragment key={2}>
          <h2 className="inline-block text-content p-3 mb-4 text-2xl font-bold bg-red-400">
            Slide 3
          </h2>
        </React.Fragment>
      )
    },
    {
      id: 3,
      content: (
        <React.Fragment key={3}>
          <h2 className="inline-block text-content p-3 mb-4 text-2xl font-bold bg-orange-400">
            Slide 4
          </h2>
        </React.Fragment>
      )
    },
    {
      id: 4,
      content: (
        <React.Fragment key={4}>
          <h2 className="inline-block text-content p-3 mb-4 text-2xl font-bold bg-green-400">
            Slide 5
          </h2>
        </React.Fragment>
      )
    }
  ];

  // const keyHandlerToSpriteState = (key) => {
  //   if (["ArrowLeft", "ArrowRight"].includes(key)) {
  //     setSpriteAnimation("walk");
  //   } else {
  //     setSpriteAnimation("idle");
  //   }
  // }

  return (
    <>
      <Slide>{slideContents[slideNumber].content}</Slide>
      <KeyDownFunctional keyHandler={() => console.log('hello')}>
        <Sprite spriteState={'idle'} />
      </KeyDownFunctional>
      <Stepper
        maxCount={4}
        changeCallback={(e) => setSlideNumber(e.target.value)}
      />
      <KeyDownFunctional />
    </>
  );
}

export default Game;
