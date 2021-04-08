import React from "react";
import Sprite from "./sprite";
import useKeyboard from "./hooks/useKeyboard";

function Sandbox() {
  const pressedKeys = useKeyboard(["ArrowRight", "ArrowLeft"]);

  // handle logic to move sprite left and right
  // no need to play with velocity, though that would be nice

  return <>
    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
        Sandbox
      </h1>
      <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
        Use the ◀️ and ▶️ cursor keys to move <b>Captain Philosophy</b>!
      </p>
    </div>
    <Sprite spriteState={pressedKeys.length ? 'walk' : 'idle'} />
  </>
}

export default Sandbox;
