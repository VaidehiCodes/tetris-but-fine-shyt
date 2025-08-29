export const TETROMINOES = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  J: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};
export type TetrominoKey = keyof typeof TETROMINOES;

export function randomTetromino(): number[][] {
  const keys = Object.keys(TETROMINOES) as TetrominoKey[];
  const rand = keys[Math.floor(Math.random() * keys.length)];
  return TETROMINOES[rand];
}
