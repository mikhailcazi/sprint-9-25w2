import { useContext } from "react";
import { ACTION_TYPES } from "../reducers/characterReducer";
import { CharacterContext } from "../context/CharacterContext";

function CharacterCreator({ dispatch }) {
  const { head, torso, shoes } = useContext(CharacterContext);

  const decrementHead = () => {
    const value = head == 0 ? 2 : head - 1;
    const action = {
      type: ACTION_TYPES.HEAD,
      value: value,
    };
    dispatch(action);
  };
  const incrementHead = () => {
    const value = head == 2 ? 0 : head + 1;
    const action = {
      type: ACTION_TYPES.HEAD,
      value: value,
    };
    dispatch(action);
  };
  const decrementTorso = () => {
    let value;
    if (torso == 0) {
      value = 2;
    } else {
      value = torso - 1;
    }
    // const value = torso == 0 ? 2 : torso - 1;
    const action = {
      type: ACTION_TYPES.TORSO,
      value: value,
    };
    dispatch(action);
  };
  const incrementTorso = () => {
    const value = torso == 2 ? 0 : torso + 1;
    const action = {
      type: ACTION_TYPES.TORSO,
      value: value,
    };
    dispatch(action);
  };
  const decrementShoes = () => {
    const value = shoes == 0 ? 2 : shoes - 1;
    const action = {
      type: ACTION_TYPES.SHOES,
      value: value,
    };
    dispatch(action);
  };
  const incrementShoes = () => {
    const value = shoes == 2 ? 0 : shoes + 1;
    const action = {
      type: ACTION_TYPES.SHOES,
      value: value,
    };
    dispatch(action);
  };

  return (
    <div style={{ backgroundColor: "#eae9e5", textAlign: "center" }}>
      <div>
        <button onClick={decrementHead}>{"<"}</button>
        <img src={`/head_${head}.jpg`} />
        <button onClick={incrementHead}>{">"}</button>
      </div>
      <div>
        <button onClick={decrementTorso}>{"<"}</button>
        <img src={`/torso_${torso}.jpg`} />
        <button onClick={incrementTorso}>{">"}</button>
      </div>
      <div>
        <button onClick={decrementShoes}>{"<"}</button>
        <img src={`/shoes_${shoes}.jpg`} />
        <button onClick={incrementShoes}>{">"}</button>
      </div>
    </div>
  );
}

export default CharacterCreator;
