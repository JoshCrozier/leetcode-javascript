/**
 * 3484. Design Spreadsheet
 * https://leetcode.com/problems/design-spreadsheet/
 * Difficulty: Medium
 *
 * A spreadsheet is a grid with 26 columns (labeled from 'A' to 'Z') and a given number
 * of rows. Each cell in the spreadsheet can hold an integer value between 0 and 105.
 *
 * Implement the Spreadsheet class:
 * - Spreadsheet(int rows) Initializes a spreadsheet with 26 columns (labeled 'A' to 'Z')
 *   and the specified number of rows. All cells are initially set to 0.
 * - void setCell(String cell, int value) Sets the value of the specified cell. The cell
 *   reference is provided in the format "AX" (e.g., "A1", "B10"), where the letter represents
 *   the column (from 'A' to 'Z') and the number represents a 1-indexed row.
 * - void resetCell(String cell) Resets the specified cell to 0.
 * - int getValue(String formula) Evaluates a formula of the form "=X+Y", where X and Y are
 *   either cell references or non-negative integers, and returns the computed sum.
 *
 * Note: If getValue references a cell that has not been explicitly set using setCell, its
 * value is considered 0.
 */

/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
  this.cellValues = new Map();
  this.totalRows = rows;
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
  this.cellValues.set(cell, value);
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
  this.cellValues.delete(cell);
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
  const expression = formula.slice(1);
  const operands = expression.split('+');

  const leftValue = this.parseOperand(operands[0]);
  const rightValue = this.parseOperand(operands[1]);

  return leftValue + rightValue;
};

/**
 * @param {string} operand
 * @return {number}
 */
Spreadsheet.prototype.parseOperand = function(operand) {
  if (/^\d+$/.test(operand)) {
    return parseInt(operand);
  }
  return this.cellValues.get(operand) || 0;
};
