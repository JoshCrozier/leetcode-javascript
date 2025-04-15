/**
 * 1467. Probability of a Two Boxes Having The Same Number of Distinct Balls
 * https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/
 * Difficulty: Hard
 *
 * Given 2n balls of k distinct colors. You will be given an integer array balls of size k where
 * balls[i] is the number of balls of color i.
 *
 * All the balls will be shuffled uniformly at random, then we will distribute the first n balls to
 * the first box and the remaining n balls to the other box (Please read the explanation of the
 * second example carefully).
 *
 * Please note that the two boxes are considered different. For example, if we have two balls of
 * colors a and b, and two boxes [] and (), then the distribution [a] (b) is considered different
 * than the distribution [b] (a) (Please read the explanation of the first example carefully).
 *
 * Return the probability that the two boxes have the same number of distinct balls. Answers
 * within 10-5 of the actual value will be accepted as correct.
 */

/**
 * @param {number[]} balls
 * @return {number}
 */
var getProbability = function(balls) {
  const totalBalls = balls.reduce((sum, count) => sum + count, 0);
  const halfBalls = totalBalls / 2;
  let validCombinations = 0;
  let totalCombinations = 0;

  calculateCombinations(0, new Array(balls.length).fill(0), halfBalls, 0);
  return validCombinations / totalCombinations;

  function countDistinct(config) {
    return config.filter(count => count > 0).length;
  }

  function calculateCombinations(index, config, remaining, firstBoxCount) {
    if (index === balls.length) {
      if (firstBoxCount === halfBalls) {
        const secondBox = balls.map((count, i) => count - config[i]);
        if (countDistinct(config) === countDistinct(secondBox)) {
          validCombinations += combinatorialProduct(config) * combinatorialProduct(secondBox);
        }
        totalCombinations += combinatorialProduct(config) * combinatorialProduct(secondBox);
      }
      return;
    }

    for (let i = 0; i <= balls[index] && firstBoxCount + i <= halfBalls; i++) {
      if (remaining >= i) {
        config[index] = i;
        calculateCombinations(index + 1, config, remaining - i, firstBoxCount + i);
        config[index] = 0;
      }
    }
  }

  function combinatorialProduct(config) {
    const numerator = factorial(halfBalls);
    let denominator = 1;
    for (const count of config) {
      denominator *= factorial(count);
    }
    return numerator / denominator;
  }

  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};
