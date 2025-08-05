import { useReducer } from "react";
import { colorReducer } from "../reducers/colorReducer";

const initialState = { sColor: "Orange", pColor1: "Red", pColor2: "Yellow" };

function ColorWheel() {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <>
      <div>
        <button onClick={() => dispatch("ORANGE")}>Orange</button>
        <button onClick={() => dispatch("GREEN")}>Green</button>
        <button onClick={() => dispatch("PURPLE")}>Purple</button>
      </div>
      <div>
        {state.sColor} is made out of {state.pColor1} & {state.pColor2}
      </div>
    </>
  );
}

export default ColorWheel;
// orange = red + yellow
// green = yellow + blue
// purple = red + blue
