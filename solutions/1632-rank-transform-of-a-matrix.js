/**
 * 1632. Rank Transform of a Matrix
 * https://leetcode.com/problems/rank-transform-of-a-matrix/
 * Difficulty: Hard
 *
 * Given an m x n matrix, return a new matrix answer where answer[row][col] is the rank of
 * matrix[row][col].
 *
 * The rank is an integer that represents how large an element is compared to other elements.
 * It is calculated using the following rules:
 * - The rank is an integer starting from 1.
 * - If two elements p and q are in the same row or column, then:
 *   - If p < q then rank(p) < rank(q)
 *   - If p == q then rank(p) == rank(q)
 *   - If p > q then rank(p) > rank(q)
 * - The rank should be as small as possible.
 *
 * The test cases are generated so that answer is unique under the given rules.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => new Array(cols).fill(0));
  const parent = new Array(rows * cols).fill(-1);
  const elements = [];

  for (let row = 0; row < rows; row++) {
    const valueToCoords = new Map();
    for (let col = 0; col < cols; col++) {
      const value = matrix[row][col];
      if (!valueToCoords.has(value)) valueToCoords.set(value, []);
      valueToCoords.get(value).push([row, col]);
    }
    for (const coords of valueToCoords.values()) {
      for (let i = 1; i < coords.length; i++) {
        const [r1, c1] = coords[0];
        const [r2, c2] = coords[i];
        union(r1 * cols + c1, r2 * cols + c2);
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    const valueToCoords = new Map();
    for (let row = 0; row < rows; row++) {
      const value = matrix[row][col];
      if (!valueToCoords.has(value)) valueToCoords.set(value, []);
      valueToCoords.get(value).push([row, col]);
    }
    for (const coords of valueToCoords.values()) {
      for (let i = 1; i < coords.length; i++) {
        const [r1, c1] = coords[0];
        const [r2, c2] = coords[i];
        union(r1 * cols + c1, r2 * cols + c2);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      elements.push([matrix[row][col], row, col]);
    }
  }
  elements.sort((a, b) => a[0] - b[0]);

  const rowMaxRank = new Array(rows).fill(0);
  const colMaxRank = new Array(cols).fill(0);
  const groups = new Map();

  for (let i = 0; i < elements.length; i++) {
    const [value, row, col] = elements[i];
    const root = find(row * cols + col);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push([row, col]);
  }

  let i = 0;
  while (i < elements.length) {
    const value = elements[i][0];
    const currentGroups = new Map();
    while (i < elements.length && elements[i][0] === value) {
      const [, row, col] = elements[i];
      const root = find(row * cols + col);
      if (!currentGroups.has(root)) currentGroups.set(root, []);
      currentGroups.get(root).push([row, col]);
      i++;
    }

    for (const [root, coords] of currentGroups) {
      let maxRank = 0;
      for (const [row, col] of coords) {
        maxRank = Math.max(maxRank, rowMaxRank[row], colMaxRank[col]);
      }
      const rank = maxRank + 1;
      for (const [row, col] of coords) {
        result[row][col] = rank;
        rowMaxRank[row] = rank;
        colMaxRank[col] = rank;
      }
    }
  }

  return result;

  function find(x) {
    if (parent[x] < 0) return x;
    return parent[x] = find(parent[x]);
  }

  function union(x, y) {
    const px = find(x);
    const py = find(y);

    if (px !== py) {
      if (parent[px] < parent[py]) {
        parent[px] += parent[py];
        parent[py] = px;
      } else {
        parent[py] += parent[px];
        parent[px] = py;
      }
    }
  }
};
