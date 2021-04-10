import { useState, useEffect } from "react";

function useKeyboardForMovement(allowedKeys, maxVelocity = 15, maxWidth = 400) {
  const minWidth = 0;
  const [position, setPosition] = useState({ prev: 0, next: 0 });
  const [velocity, setVelocity] = useState(1);
  const [direction, setDirection] = useState({ x: true, y: true });

  const onKeyDown = ({ key }) => {
    if (!allowedKeys.includes(key)) return;
    if (key === "ArrowRight") {
      const proposedVelocity = position.prev < position.next ? velocity + 1 : 1;
      setVelocity(proposedVelocity > maxVelocity ? maxVelocity : proposedVelocity);
      // in case resize occurs
      const maxAllowedWidth = position.next > maxWidth ? position.next : maxWidth;
      const proposedPosition = position.next + 1 * velocity;
      setPosition({ prev: position.next, next: proposedPosition > maxAllowedWidth ? maxAllowedWidth : proposedPosition });
      setDirection({ x: true, y: direction.y });
    } else if (key === "ArrowLeft") {
      const proposedVelocity = position.prev > position.next ? velocity + 1 : 1;
      setVelocity(proposedVelocity > maxVelocity ? maxVelocity : proposedVelocity);
      const proposedPosition = position.next - 1 * velocity;
      setPosition({ prev: position.next, next: proposedPosition < minWidth ? minWidth : proposedPosition });
      setDirection({ x: false, y: direction.y });
    }
  };

  const onKeyUp = ({ key }) => {
    if (allowedKeys.includes(key)) {
      setPosition({ prev: position.next, next: position.next });
      setVelocity(1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);
  return [position, direction, velocity];
}

export default useKeyboardForMovement;
