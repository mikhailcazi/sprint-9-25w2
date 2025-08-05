import React, { useReducer, useState } from "react";
import background from "../assets/images/background.png";
import { backgroundReducer } from "../reducers/backgroundReducer";
export default function Background() {
  const initialState = { speed: 10 };

  const distance = 10;
  const WIDTH = 612;

  const [state, dispatch] = useReducer(backgroundReducer, initialState);

  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(WIDTH);
  const [pos3, setPos3] = useState(WIDTH * 2);

  setTimeout(() => {
    setPos1(pos1 < -WIDTH ? (WIDTH - distance) * 2 : pos1 - distance);
    setPos2(pos2 < -WIDTH ? (WIDTH - distance) * 2 : pos2 - distance);
    setPos3(pos3 < -WIDTH ? (WIDTH - distance) * 2 : pos3 - distance);
  }, 5000 / state.speed);

  const accelerate = () => dispatch({ type: "FASTER" });

  const decelerate = () => dispatch({ type: "SLOWER" });

  return (
    <>
      <img
        className="bg-image"
        src={background}
        style={{ left: pos1 + "px" }}
      ></img>
      <img
        className="bg-image"
        src={background}
        style={{ left: pos2 + "px" }}
      ></img>
      <img
        className="bg-image"
        src={background}
        style={{ left: pos3 + "px" }}
      ></img>

      <p style={{ position: "absolute", color: "white" }}>
        Speed: {state.speed}
      </p>

      <div style={{ position: "absolute", top: "475px" }}>
        <button onClick={() => accelerate()}>Faster</button>
        <button onClick={() => decelerate()}>Slower</button>
        {/* <button onClick={() => switchLane()}>Switch Lane</button> */}
      </div>
    </>
  );
}
