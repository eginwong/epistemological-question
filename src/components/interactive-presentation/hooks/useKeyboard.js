import { useState, useEffect } from "react";

function useKeyboard(allowedKeys) {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    const onKeyDown = ({ key }) => {
      if (allowedKeys.includes(key) && !pressedKeys.includes(key)) {
        setPressedKeys((previousPressedKeys) => [...previousPressedKeys, key]);
      }
    };

    const onKeyUp = ({ key }) => {
      if (allowedKeys.includes(key)) {
        setPressedKeys((previousPressedKeys) =>
          previousPressedKeys.filter((k) => k !== key)
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);
  return pressedKeys;
}

export default useKeyboard;
