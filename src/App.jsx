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
        <ul className="flex justify-center gap-1">
          {array.map((item) => (
            <li>
              <button className="border rounded w-8 h-8 hover:bg-red-300 hover:text-white">
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-between">
          <div>Not likely</div>
          <div>Super likely</div>
        </div>

        <div className="flex justify-between">
          <button>Skip</button>
          <button className="bg-purple-400 p-3 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
