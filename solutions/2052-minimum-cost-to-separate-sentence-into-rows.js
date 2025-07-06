/**
 * 2052. Minimum Cost to Separate Sentence Into Rows
 * https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/
 * Difficulty: Medium
 *
 * You are given a string sentence containing words separated by spaces, and an integer k.
 * Your task is to separate sentence into rows where the number of characters in each row
 * is at most k. You may assume that sentence does not begin or end with a space, and the
 * words in sentence are separated by a single space.
 *
 * You can split sentence into rows by inserting line breaks between words in sentence.
 * A word cannot be split between two rows. Each word must be used exactly once, and the
 * word order cannot be rearranged. Adjacent words in a row should be separated by a single
 * space, and rows should not begin or end with spaces.
 *
 * The cost of a row with length n is (k - n)2, and the total cost is the sum of the costs
 * for all rows except the last one.
 * - For example if sentence = "i love leetcode" and k = 12:
 *   - Separating sentence into "i", "love", and "leetcode" has a cost
 *     of (12 - 1)2 + (12 - 4)2 = 185.
 *   - Separating sentence into "i love", and "leetcode" has a cost of (12 - 6)2 = 36.
 *   - Separating sentence into "i", and "love leetcode" is not possible because the
 *     length of "love leetcode" is greater than k.
 *
 * Return the minimum possible total cost of separating sentence into rows.
 */

/**
 * @param {string} sentence
 * @param {number} k
 * @return {number}
 */
var minimumCost = function(sentence, k) {
  const words = sentence.split(' ');
  const n = words.length;
  const map = new Map();

  return dp(0);

  function dp(wordIndex) {
    if (wordIndex === n) return 0;
    if (map.has(wordIndex)) return map.get(wordIndex);

    let currentLength = 0;
    let minCost = Infinity;

    for (let i = wordIndex; i < n; i++) {
      if (i > wordIndex) currentLength += 1;
      currentLength += words[i].length;

      if (currentLength > k) break;

      const remainingCost = dp(i + 1);
      const currentCost = i === n - 1 ? 0 : (k - currentLength) ** 2;
      minCost = Math.min(minCost, currentCost + remainingCost);
    }

    map.set(wordIndex, minCost);
    return minCost;
  }
};
