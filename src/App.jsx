import "./App.css";
import "./css/styles.css";
import CharacterCreator from "./sprint-10-week-1/CharacterCreator";
import CharacterInfo from "./sprint-10-week-1/CharacterInfo";
import { CharacterContext } from "./context/CharacterContext";
import { useReducer } from "react";
import { characterReducer } from "./reducers/characterReducer";

function App() {
  const initialValue = { head: 0, torso: 0, shoes: 0 };
  const [state, dispatch] = useReducer(characterReducer, initialValue);

  return (
    <>
      <CharacterContext.Provider value={state}>
        <CharacterInfo />
        <CharacterCreator dispatch={dispatch} />
      </CharacterContext.Provider>
    </>
  );
}

export default App;
