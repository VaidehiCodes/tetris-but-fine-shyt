import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [grid] = useState(Array.from({ length: 20 }, () => Array(10).fill(0)));

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Board grid={grid} />
    </div>
  );
}
export default App;
