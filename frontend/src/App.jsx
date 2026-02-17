import { useState } from "react";

export default function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState("");

  const calc = async (op) => {
    const r = await fetch(`/api/${op}?x=${x}&y=${y}`);
    const data = await r.json();
    setResult(data.result);
  };

  return (
    <div style={{ margin: 40 }}>
      <h1>Calculator</h1>

      <input placeholder="X" value={x} onChange={(e) => setX(e.target.value)} />
      <input placeholder="Y" value={y} onChange={(e) => setY(e.target.value)} />

      <br /><br />

      <button onClick={() => calc("add")}>+</button>
      <button onClick={() => calc("subtract")}>-</button>
      <button onClick={() => calc("multiply")}>*</button>
      <button onClick={() => calc("divide")}>/</button>

      <h2>Result: {result}</h2>
    </div>
  );
}