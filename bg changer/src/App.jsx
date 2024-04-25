import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
        <div className="fixed flex flex-wrap shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "Red" }}
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "Black" }}
            onClick={() => setColor("Black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "Orange" }}
            onClick={() => setColor("Orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
