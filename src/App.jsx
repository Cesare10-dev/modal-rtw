import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white text-black p-8 space-y-6 shadow-lg rounded-xl max-w-md">
        <h1 className="text-center font-bold text-2xl">
          Answer to this question with a number
        </h1>
        <ul>
          <li>
            <button className="border rounded w-8 h-8 hover:bg-red-400">
              0
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
