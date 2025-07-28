import useCounter from "../hooks/useCounter";

function UpgradedCounter() {
  const [c1, i1, d1] = useCounter(-10);
  const [c2, i2, d2] = useCounter(10);

  return (
    <>
      <p>Count: {c1}</p>
      <button onClick={i1}>Increment</button>
      <button onClick={d1}>Decrement</button>

      <p>Count: {c2}</p>
      <button onClick={i2}>Increment</button>
      <button onClick={d2}>Decrement</button>
    </>
  );
}

export default UpgradedCounter;
