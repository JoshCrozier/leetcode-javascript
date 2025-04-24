/**
 * 1648. Sell Diminishing-Valued Colored Balls
 * https://leetcode.com/problems/sell-diminishing-valued-colored-balls/
 * Difficulty: Medium
 *
 * You have an inventory of different colored balls, and there is a customer that wants orders
 * balls of any color.
 *
 * The customer weirdly values the colored balls. Each colored ball's value is the number of balls
 * of that color you currently have in your inventory. For example, if you own 6 yellow balls,
 * the customer would pay 6 for the first yellow ball. After the transaction, there are only 5
 * yellow balls left, so the next yellow ball is then valued at 5 (i.e., the value of the balls
 * decreases as you sell more to the customer).
 *
 * You are given an integer array, inventory, where inventory[i] represents the number of balls of
 * the ith color that you initially own. You are also given an integer orders, which represents
 * the total number of balls that the customer wants. You can sell the balls in any order.
 *
 * Return the maximum total value that you can attain after selling orders colored balls. As the
 * answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function(inventory, orders) {
  const MOD = 1e9 + 7;
  inventory.sort((a, b) => b - a);
  inventory.push(0);

  let totalProfit = 0;
  let currentColor = 0;
  let ballsSold = 0;

  while (ballsSold < orders) {
    const currentCount = inventory[currentColor];
    const nextCount = inventory[currentColor + 1];
    const colors = currentColor + 1;
    const ballsToSell = Math.min(
      orders - ballsSold,
      colors * (currentCount - nextCount)
    );

    const fullSets = Math.floor(ballsToSell / colors);
    const remainder = ballsToSell % colors;

    if (fullSets > 0) {
      const endValue = currentCount - fullSets + 1;
      let sequenceSum = (BigInt(colors) * BigInt(fullSets) % BigInt(MOD))
        * (BigInt(currentCount) + BigInt(endValue)) % BigInt(MOD);
      sequenceSum = (sequenceSum * BigInt(500000004)) % BigInt(MOD);
      totalProfit = (totalProfit + Number(sequenceSum)) % MOD;
    }

    if (remainder > 0) {
      totalProfit = (totalProfit + (remainder * (currentCount - fullSets)) % MOD) % MOD;
    }

    ballsSold += ballsToSell;
    currentColor++;
  }

  return totalProfit;
};
