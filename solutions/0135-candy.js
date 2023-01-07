/**
 * 135. Candy
 * https://leetcode.com/problems/candy/
 * Difficulty: Hard
 *
 * There are n children standing in a line. Each child is assigned a rating value given
 * in the integer array ratings.
 *
 * You are giving candies to these children subjected to the following requirements:
 * - Each child must have at least one candy.
 * - Children with a higher rating get more candies than their neighbors.
 *
 * Return the minimum number of candies you need to have to distribute the candies to
 * the children.
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const data = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      data[i] = data[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      data[i - 1] = data[i - 1] > data[i] + 1 ? data[i - 1] : data[i] + 1;
    }
  }

  return data.reduce((sum, n) => sum + n, 0);
};
