import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Sprite from "./sprite";
import useKeyboardForMovement from "./hooks/useKeyboardForMovement";

// NOTE: doesn't account for window resizing
function Sandbox({maxWidth}) {
  const maxSpriteVelocity = 15;
  const [position, direction, velocity] = useKeyboardForMovement(["ArrowRight", "ArrowLeft"], maxSpriteVelocity, maxWidth);
  const spriteId = "sandbox-sprite";
  const spriteSize = 2;

  useEffect(() => {
    const spriteElt = document.getElementById(spriteId);
    spriteElt.style.transform = `scale(${spriteSize}) translateX(${position.next}px)${!direction.x ? ' scaleX(-1)' : ''}`;
  }, [position]);

  return <>
    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
        Sandbox
      </h1>
      <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
        Use the ◀️ and ▶️ cursor keys to move <b>Captain Philosophy</b>!
      </p>
    </div>
    <Sprite
      id={spriteId}
      spriteState={velocity === 1 ? 'idle' : 'walk'} />
      <h2>{position.next}</h2>
      <h2>{velocity}</h2>
  </>
}

Sandbox.propTypes = {
  maxWidth: PropTypes.number
};

export default Sandbox;
