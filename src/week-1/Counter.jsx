import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <CounterDisplay num={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

function CounterDisplay(props) {
  return (
    <>
      <p>Count: {props.num}</p>
    </>
  );
}
export default Counter;
