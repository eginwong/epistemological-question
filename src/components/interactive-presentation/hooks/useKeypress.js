import { useEffect } from "react";

// ref: https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
export default function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
}
