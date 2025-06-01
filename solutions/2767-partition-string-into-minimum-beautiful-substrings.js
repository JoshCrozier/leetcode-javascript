/**
 * 2767. Partition String Into Minimum Beautiful Substrings
 * https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/
 * Difficulty: Medium
 *
 * Given a binary string s, partition the string into one or more substrings such that each
 * substring is beautiful.
 *
 * A string is beautiful if:
 * - It doesn't contain leading zeros.
 * - It's the binary representation of a number that is a power of 5.
 *
 * Return the minimum number of substrings in such partition. If it is impossible to partition
 * the string s into beautiful substrings, return -1.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function(s) {
  const n = s.length;
  const powersOfFive = new Set();
  let power = 1;
  while (power.toString(2).length <= n) {
    powersOfFive.add(power.toString(2));
    power *= 5;
  }

  const result = findMinPartitions(0);
  return result === Infinity ? -1 : result;

  function findMinPartitions(index) {
    if (index === n) return 0;
    if (s[index] === '0') return Infinity;

    let minPartitions = Infinity;
    for (let end = index + 1; end <= n; end++) {
      const substring = s.slice(index, end);
      if (powersOfFive.has(substring)) {
        const next = findMinPartitions(end);
        if (next !== Infinity) {
          minPartitions = Math.min(minPartitions, 1 + next);
        }
      }
    }

    return minPartitions;
  }
};
