/**
 * 631. Design Excel Sum Formula
 * https://leetcode.com/problems/design-excel-sum-formula/
 * Difficulty: Hard
 *
 * Design the basic function of Excel and implement the function of the sum formula.
 *
 * Implement the Excel class:
 * - Excel(int height, char width) Initializes the object with the height and the width
 *   of the sheet. The sheet is an integer matrix mat of size height x width with the row
 *   index in the range [1, height] and the column index in the range ['A', width]. All the
 *   values should be zero initially.
 * - void set(int row, char column, int val) Changes the value at mat[row][column] to be val.
 * - int get(int row, char column) Returns the value at mat[row][column].
 * - int sum(int row, char column, List<String> numbers) Sets the value at mat[row][column] to
 *   be the sum of cells represented by numbers and returns the value at mat[row][column].
 *   This sum formula should exist until this cell is overlapped by another value or another
 *   sum formula. numbers[i] could be on the format:
 *   - "ColRow" that represents a single cell.
 *     - For example, "F7" represents the cell mat[7]['F'].
 *   - "ColRow1:ColRow2" that represents a range of cells. The range will always be a rectangle
 *     where "ColRow1" represent the position of the top-left cell, and "ColRow2" represents the
 *     position of the bottom-right cell.
 *     - For example, "B3:F7" represents the cells mat[i][j] for 3 <= i <= 7 and 'B' <= j <= 'F'.
 *
 * Note: You could assume that there will not be any circular sum reference.
 *
 * For example, mat[1]['A'] == sum(1, "B") and mat[1]['B'] == sum(1, "A").
 */

/**
 * @param {number} height
 * @param {character} width
 */
var Excel = function(height, width) {
  this.height = height;
  this.width = width.charCodeAt(0) - 64;
  this.matrix = new Array(height).fill().map(() => new Array(this.width).fill(0));
  this.formulas = new Map();
  this.dependencies = new Map();
};

/**
 * @param {number} row
 * @param {character} column
 * @param {number} val
 * @return {void}
 */
Excel.prototype.set = function(row, column, val) {
  const col = column.charCodeAt(0) - 65;
  const key = `${row}:${column}`;
  this.matrix[row - 1][col] = val;
  if (this.formulas.has(key)) {
    this.formulas.delete(key);
    this.dependencies.get(key)?.delete(key);
  }
  this.updateDependents(row, column);
};

/**
 * @param {number} row
 * @param {character} column
 * @return {number}
 */
Excel.prototype.get = function(row, column) {
  const col = column.charCodeAt(0) - 65;
  return this.matrix[row - 1][col];
};

/**
 * @param {number} row
 * @param {character} column
 * @param {string[]} numbers
 * @return {number}
 */
Excel.prototype.sum = function(row, column, numbers) {
  const col = column.charCodeAt(0) - 65;
  const cellKey = `${row}:${column}`;
  const cells = [];

  for (const num of numbers) {
    if (num.includes(':')) {
      const [start, end] = num.split(':');
      const startCol = start[0].charCodeAt(0) - 65;
      const startRow = parseInt(start.slice(1)) - 1;
      const endCol = end[0].charCodeAt(0) - 65;
      const endRow = parseInt(end.slice(1)) - 1;

      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          cells.push([r, c]);
        }
      }
    } else {
      const c = num[0].charCodeAt(0) - 65;
      const r = parseInt(num.slice(1)) - 1;
      cells.push([r, c]);
    }
  }

  if (this.formulas.has(cellKey)) {
    for (const [r, c] of this.formulas.get(cellKey)) {
      const depKey = `${r + 1}:${String.fromCharCode(c + 65)}`;
      this.dependencies.get(depKey)?.delete(cellKey);
    }
  }

  this.formulas.set(cellKey, cells);
  for (const [r, c] of cells) {
    const depKey = `${r + 1}:${String.fromCharCode(c + 65)}`;
    if (!this.dependencies.has(depKey)) {
      this.dependencies.set(depKey, new Set());
    }
    this.dependencies.get(depKey).add(cellKey);
  }

  const total = this.calculateSum(cells);
  this.matrix[row - 1][col] = total;
  this.updateDependents(row, column);
  return total;
};

Excel.prototype.calculateSum = function(cells) {
  return cells.reduce((sum, [r, c]) => sum + this.matrix[r][c], 0);
};

Excel.prototype.updateDependents = function(row, column) {
  const key = `${row}:${column}`;
  if (!this.dependencies.has(key)) return;

  for (const depKey of this.dependencies.get(key)) {
    const [depRow, depCol] = depKey.split(':');
    const col = depCol.charCodeAt(0) - 65;
    const cells = this.formulas.get(depKey);
    if (cells) {
      const newSum = this.calculateSum(cells);
      this.matrix[parseInt(depRow) - 1][col] = newSum;
      this.updateDependents(parseInt(depRow), depCol);
    }
  }
};
