import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const findFactorial = () => {
    if (number === "" || number < 0) {
      setResult("⚠️ Please enter a non-negative number");
      return;
    }

    let num = parseInt(number);
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }

    setResult(`Factorial of ${num} is ${fact}`);
  };

  return (
    <div className="container">
      <h1>🧮 Factorial Finder</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={findFactorial}>Find Factorial</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
