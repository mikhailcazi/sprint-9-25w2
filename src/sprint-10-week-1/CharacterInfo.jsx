import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

function CharacterInfo() {
  const { head, torso, shoes } = useContext(CharacterContext);
  return (
    <>
      This character is using Head number {head}, Torso number {torso} and shoe
      number {shoes}
    </>
  );
}
export default CharacterInfo;
