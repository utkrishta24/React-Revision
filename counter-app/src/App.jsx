import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const counterIncrement = () => {
    setValue(value + 1);
  };
  const counterDecrement = () => {
    setValue(value - 1);
  };
  return (
    <>
      <h1>React Counter: {value}</h1>
      <button onClick={counterIncrement}>Click here to increment!</button>
      <br />
      <br />
      <button onClick={counterDecrement}>Click here to decrement!</button>
    </>
  );
}

export default App;
