/**
 * 2280. Minimum Lines to Represent a Line Chart
 * https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/
 * Difficulty: Medium
 *
 * You are given a 2D integer array stockPrices where stockPrices[i] = [dayi, pricei] indicates
 * the price of the stock on day dayi is pricei. A line chart is created from the array by
 * plotting the points on an XY plane with the X-axis representing the day and the Y-axis
 * representing the price and connecting adjacent points. One such example is shown below.
 *
 * Return the minimum number of lines needed to represent the line chart.
 */

/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  if (stockPrices.length <= 2) return stockPrices.length - 1;

  stockPrices.sort((a, b) => a[0] - b[0]);

  let lines = 1;
  for (let i = 2; i < stockPrices.length; i++) {
    const [x0, y0] = stockPrices[i - 2];
    const [x1, y1] = stockPrices[i - 1];
    const [x2, y2] = stockPrices[i];

    const dx1 = BigInt(x1 - x0);
    const dy1 = BigInt(y1 - y0);
    const dx2 = BigInt(x2 - x1);
    const dy2 = BigInt(y2 - y1);

    if (dy1 * dx2 !== dy2 * dx1) lines++;
  }

  return lines;
};
