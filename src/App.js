import React, { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <h2>Determine dates in the past or future</h2>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="containers">
        <input
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          type="range"
          min="0"
          max="10"
        />
        <span>Step: {step}</span>
        {/* <button onClick={handleStepDown}>-</button>
        <h2>Step: {step}</h2>
        <button onClick={handleStepUp}>+</button> */}
      </div>

      <div className="containers">
        <button onClick={handleCountDown}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
