/**
 * 1518. Water Bottles
 * https://leetcode.com/problems/water-bottles/
 * Difficulty: Easy
 *
 * There are numBottles water bottles that are initially full of water. You can exchange numExchange
 * empty water bottles from the market with one full water bottle.
 *
 * The operation of drinking a full water bottle turns it into an empty bottle.
 *
 * Given the two integers numBottles and numExchange, return the maximum number of water bottles you
 * can drink.
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let result = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    const newBottles = Math.floor(emptyBottles / numExchange);
    result += newBottles;
    emptyBottles = newBottles + (emptyBottles % numExchange);
  }

  return result;
};
