import React, { useState } from "react";

const App = function () {
  const [value,setValue]=useState(1)
  const [multipliedValue, setMultipliedValue]=useState(1)

  const multiplier=()=>{
    setMultipliedValue(value*5)
    setValue(value+1)
  }

  return(
    <div>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplier}>Click to multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </div>
  )
};

export default App;
