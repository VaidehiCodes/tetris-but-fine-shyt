import { useState, useEffect } from "react";
import Board from "./components/Board";
import { randomTetromino } from "./utils/tetrominoes";

function App() {
  const [grid, setGrid] = useState(
    Array.from({ length: 20 }, () => Array(10).fill(0))
  );
  const [piece, setPiece] = useState<number[][]>(randomTetromino());
  const [position, setPosition] = useState({ x: 3, y: 0 });

  useEffect(() => {
    const drawPiece = () => {
      // ✅ copy current grid
      const newGrid = grid.map((row) => [...row]);

      // ✅ clear only old "active piece" cells (2)
      for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
          if (newGrid[y][x] === 2) newGrid[y][x] = 0;
        }
      }

      // ✅ draw piece at current position
      piece.forEach((row, dy) => {
        row.forEach((value, dx) => {
          if (value) {
            const newY = position.y + dy;
            const newX = position.x + dx;
            if (newY >= 0 && newY < 20 && newX >= 0 && newX < 10) {
              newGrid[newY][newX] = 2;
            }
          }
        });
      });

      setGrid(newGrid);
    };

    drawPiece();
  }, [piece, position, grid]); // 🔹 include grid as dependency

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Board grid={grid} />
    </div>
  );
}

export default App;
