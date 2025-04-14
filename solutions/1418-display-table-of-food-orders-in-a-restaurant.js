/**
 * 1418. Display Table of Food Orders in a Restaurant
 * https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
 * Difficulty: Medium
 *
 * Given the array orders, which represents the orders that customers have done in a restaurant.
 * More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the
 * name of the customer, tableNumberi is the table customer sit at, and foodItemi is the item
 * customer orders.
 *
 * Return the restaurant's “display table”. The “display table” is a table whose row entries
 * denote how many of each food item each table ordered. The first column is the table number
 * and the remaining columns correspond to each food item in alphabetical order. The first row
 * should be a header whose first column is “Table”, followed by the names of the food items.
 * Note that the customer names are not part of the table. Additionally, the rows should be
 * sorted in numerically increasing order.
 */

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
  const foodItems = new Set();
  const tableOrders = new Map();

  for (const [, table, item] of orders) {
    foodItems.add(item);
    const tableMap = tableOrders.get(table) || new Map();
    tableMap.set(item, (tableMap.get(item) || 0) + 1);
    tableOrders.set(table, tableMap);
  }

  const sortedItems = [...foodItems].sort();
  const header = ['Table', ...sortedItems];
  const result = [header];

  for (const table of [...tableOrders.keys()].sort((a, b) => a - b)) {
    const row = [table];
    const items = tableOrders.get(table);
    for (const item of sortedItems) {
      row.push(String(items.get(item) || 0));
    }
    result.push(row);
  }

  return result;
};
