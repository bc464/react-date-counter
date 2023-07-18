import React, { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <h1>Hello CodeSandBox</h1>
      <h2>Start editing to see some magic happening</h2>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(" june 21 2027");
  date.setDate(date.getDate() + count);

  function handleStepDown() {
    setStep((s) => s - 1);
  }
  function handleStepUp() {
    setStep((s) => s + 1);
  }
  function handleCountDown() {
    setCount((c) => c - step);
  }
  function handleCountUp() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div className="containers">
        <button onClick={handleStepDown}>-</button>
        <h2>Step: {step}</h2>
        <button onClick={handleStepUp}>+</button>
      </div>

      <div className="containers">
        <button onClick={handleCountDown}>-</button>
        <h2>Count: {count}</h2>
        <button onClick={handleCountUp}>+</button>
      </div>

      <h4>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </h4>
    </>
  );
}
