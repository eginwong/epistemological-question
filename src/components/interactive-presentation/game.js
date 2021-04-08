import React, { useState } from "react";
import Stepper from "./stepper";
import Slide from "./slide";
import Sprite from "./sprite";
import "./game.css";

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
 *
 */

function Game() {
  const [slideNumber, setSlideNumber] = useState(0);
  // const [spriteAnimation, setSpriteAnimation] = useState('idle');

  const createSlideContents = (id, color, contents) => {
    return (
      <React.Fragment key={id}>
        <h2
          className={`inline-block text-content p-3 mb-4 text-2xl font-bold bg-${color}-400`}
        >
          {contents}
        </h2>
      </React.Fragment>
    );
    //   <React.Fragment key={3}>
    //   <div className="flex">
    //     <h2 className="inline-block text-content p-3 mb-4 text-2xl font-bold bg-indigo-400">

    //     </h2>
    //     <img src="https://www.sapaviva.com/wp-content/uploads/2017/06/53S.-Ren%C3%A9-Descartes-1596-1650-316x316.jpg"></img>
    //   </div>
    // </React.Fragment>
  };
  const slideData = [
    {
      color: "yellow",
      text: "Use ◀️ and ▶️ keys!",
    },
    {
      color: "red",
      text: "What is the mind body problem?",
    },
    {
      color: "pink",
      text:
        "Context: What is the relevance of the mind-body problem to daily life, media?",
    },
    {
      color: "indigo",
      text:
        "Response: Man's questioning existence bridges the ontological gap between what is in our minds and what is objective and real.",
    },
    {
      color: "green",
      text: "What are the roots of the mind-body problem? Cartesian Dualism",
    },
    {
      color: "blue",
      text: "(think about syllogism to explain argument and dissect premises)",
    },
    {
      color: "purple",
      text:
        "Reflect upon Gallagher's/Heidegger's idea of _the question_ as the irreducible beginning",
    },
    {
      color: "gray",
      text: "Exposition",
    },
    {
      color: "blue",
      text: "Conclusion",
    },
  ];

  const slideContents = slideData.map((val, id) => ({
    id,
    content: createSlideContents(id, val.color, val.text),
  }));

  return (
    <>
      <Slide>{slideContents[slideNumber].content}</Slide>
      <Sprite spriteState={"idle"} />
      <Stepper
        maxCount={slideContents.length - 1}
        changeCallback={(e) => setSlideNumber(e.target.value)}
      />
    </>
  );
}

export default Game;
