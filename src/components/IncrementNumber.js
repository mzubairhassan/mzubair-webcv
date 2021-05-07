import React from "react";
import { useSpring, animated } from "react-spring";

export default function IncrementNumber({ endNumber }) {
  const props = useSpring({
    config: { duration: 2000 },
    number: endNumber,
    from: { number: 0 },
  });

  return (
    <animated.span>{props.number.to((val) => Math.floor(val))}</animated.span>
  );
}
