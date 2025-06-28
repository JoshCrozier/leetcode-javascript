/**
 * 1196. How Many Apples Can You Put into the Basket
 * https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/
 * Difficulty: Easy
 *
 * You have some apples and a basket that can carry up to 5000 units of weight.
 *
 * Given an integer array weight where weight[i] is the weight of the ith apple,
 * return the maximum number of apples you can put in the basket.
 */

/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
  weight.sort((a, b) => a - b);

  let totalWeight = 0;
  let result = 0;

  for (const appleWeight of weight) {
    if (totalWeight + appleWeight <= 5000) {
      totalWeight += appleWeight;
      result++;
    } else {
      break;
    }
  }

  return result;
};
