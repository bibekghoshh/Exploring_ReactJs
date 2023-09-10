import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);

  function addValue() {
    setCount(count + 1);
  }
  function removeValue() {
    if (count > 0) {
      setCount(count - 1);
    }
    console.log({ count });
  }

  return (
    <>
      <h2>Counter app</h2>
      <h2>{count}</h2>
      <button onClick={addValue}>Increase by 1</button> <br />
      <button onClick={removeValue}>decrease by 1</button>
    </>
  );
}

export default App;
