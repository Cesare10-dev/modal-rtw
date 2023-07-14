import { useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white text-black p-8 space-y-6 shadow-lg rounded-xl max-w-md">
        <h1 className="text-center font-bold text-2xl">
          Answer to this question with a number
        </h1>
        <ul className="flex">
          {array.map((item) => (
            <li>
              <button className="border rounded w-8 h-8 hover:bg-red-400">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
