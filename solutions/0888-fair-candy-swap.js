/**
 * 888. Fair Candy Swap
 * https://leetcode.com/problems/fair-candy-swap/
 * Difficulty: Easy
 *
 * Alice and Bob have a different total number of candies. You are given two integer arrays
 * aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of
 * candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy
 * that Bob has.
 *
 * Since they are friends, they would like to exchange one candy box each so that after the
 * exchange, they both have the same total amount of candy. The total amount of candy a
 * person has is the sum of the number of candies in each box they have.
 *
 * Return an integer array answer where answer[0] is the number of candies in the box that
 * Alice must exchange, and answer[1] is the number of candies in the box that Bob must
 * exchange. If there are multiple answers, you may return any one of them. It is guaranteed
 * that at least one answer exists.
 */

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  const aliceTotal = aliceSizes.reduce((sum, size) => sum + size, 0);
  const bobTotal = bobSizes.reduce((sum, size) => sum + size, 0);
  const diff = (aliceTotal - bobTotal) / 2;
  const bobSet = new Set(bobSizes);

  for (const aliceBox of aliceSizes) {
    const targetBobBox = aliceBox - diff;
    if (bobSet.has(targetBobBox)) {
      return [aliceBox, targetBobBox];
    }
  }
};
