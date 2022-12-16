import React, { createContext, useState } from "react";

export const counterContext = createContext();
// переменная, которая хранит в себе контекст

const CounterContextProvider = ({ children }) => {
  // компонент, в котором хранятся все функции и переменные. Принимает все дочерние элементы входными данными

  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <counterContext.Provider
      value={{
        counter,
        increment,
        decrement,
      }}
    >
      {children}
    </counterContext.Provider>
  );
  //   возвращает через метод Provider все дочерние элементы , и им передает все функции и переменные
};

export default CounterContextProvider;
