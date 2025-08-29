type BoardProps = {
  grid: number[][];
};

export default function Board({ grid }: BoardProps) {
  return (
    <div className="grid grid-cols-10 gap-[1px] bg-gray-700 p-1">
      {grid.flat().map((cell, i) => (
        <div
          key={i}
          className={`w-6 h-6 ${
            cell === 0
              ? "bg-gray-900"
              : cell === 2
              ? "bg-green-500"
              : "bg-blue-500"
          } border border-gray-800`}
        />
      ))}
    </div>
  );
}
