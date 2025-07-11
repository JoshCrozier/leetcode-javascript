/**
 * 2408. Design SQL
 * https://leetcode.com/problems/design-sql/
 * Difficulty: Medium
 *
 * You are given two string arrays, names and columns, both of size n. The ith table is represented
 * by the name names[i] and contains columns[i] number of columns.
 *
 * You need to implement a class that supports the following operations:
 * - Insert a row in a specific table with an id assigned using an auto-increment method, where the
 *   id of the first inserted row is 1, and the id of each new row inserted into the same table is
 *   one greater than the id of the last inserted row, even if the last row was removed.
 * - Remove a row from a specific table. Removing a row does not affect the id of the next inserted
 *   row.
 * - Select a specific cell from any table and return its value.
 * - Export all rows from any table in csv format.
 *
 * Implement the SQL class:
 * - SQL(String[] names, int[] columns)
 *   - Creates the n tables.
 * - bool ins(String name, String[] row)
 *   - Inserts row into the table name and returns true.
 *   - If row.length does not match the expected number of columns, or name is not a valid table,
 *     returns false without any insertion.
 * - void rmv(String name, int rowId)
 *   - Removes the row rowId from the table name.
 *   - If name is not a valid table or there is no row with id rowId, no removal is performed.
 * - String sel(String name, int rowId, int columnId)
 *   - Returns the value of the cell at the specified rowId and columnId in the table name.
 *   - If name is not a valid table, or the cell (rowId, columnId) is invalid, returns "<null>".
 * - String[] exp(String name)
 *   - Returns the rows present in the table name.
 *   - If name is not a valid table, returns an empty array. Each row is represented as a string,
 *     with each cell value (including the row's id) separated by a ",".
 */

/**
 * @param {string[]} names
 * @param {number[]} columns
 */
var SQL = function(names, columns) {
  this.tables = new Map();
  this.nextRowIds = new Map();

  for (let i = 0; i < names.length; i++) {
    this.tables.set(names[i], {
      columns: columns[i],
      rows: new Map()
    });
    this.nextRowIds.set(names[i], 1);
  }
};

/**
 * @param {string} name
 * @param {string[]} row
 * @return {boolean}
 */
SQL.prototype.ins = function(name, row) {
  if (!this.tables.has(name)) return false;

  const table = this.tables.get(name);
  if (row.length !== table.columns) return false;

  const rowId = this.nextRowIds.get(name);
  table.rows.set(rowId, row);
  this.nextRowIds.set(name, rowId + 1);

  return true;
};

/**
 * @param {string} name
 * @param {number} rowId
 * @return {void}
 */
SQL.prototype.rmv = function(name, rowId) {
  if (!this.tables.has(name)) return;

  const table = this.tables.get(name);
  table.rows.delete(rowId);
};

/**
 * @param {string} name
 * @param {number} rowId
 * @param {number} columnId
 * @return {string}
 */
SQL.prototype.sel = function(name, rowId, columnId) {
  if (!this.tables.has(name)) return '<null>';

  const table = this.tables.get(name);
  if (!table.rows.has(rowId) || columnId < 1 || columnId > table.columns) {
    return '<null>';
  }

  return table.rows.get(rowId)[columnId - 1];
};

/**
 * @param {string} name
 * @return {string[]}
 */
SQL.prototype.exp = function(name) {
  if (!this.tables.has(name)) return [];

  const table = this.tables.get(name);
  const result = [];

  for (const [rowId, row] of table.rows) {
    result.push(`${rowId},${row.join(',')}`);
  }

  return result;
};
