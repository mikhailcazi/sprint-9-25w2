import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    let localStorageValue = window.localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
