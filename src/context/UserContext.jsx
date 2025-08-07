import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const user = {
    name: "Kelly Clarkson",
    city: "Dallas",
  };

  return (
    <>
      <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    </>
  );
}
