import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserDisplay() {
  const user = useContext(UserContext);
  return (
    <>
      Hey this is {user.name} and I'm from {user.city}
    </>
  );
}
