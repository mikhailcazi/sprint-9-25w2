import React from "react";

export default function Controls() {
  const accelerate = () => {};

  const decelerate = () => {};

  const switchLane = () => {};
  return (
    <>
      <button onClick={() => accelerate()}>Faster</button>
      <button onClick={() => decelerate()}>Slower</button>
      <button onClick={() => switchLane()}>Switch Lane</button>
    </>
  );
}
