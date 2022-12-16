import React, { useContext } from "react";
import { counterContext } from "../../contexts/counterContext";

const Counter = () => {
  const { increment, decrement, counter } = useContext(counterContext);
  return (
    <div>
      <button onClick={decrement}>-1</button>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
