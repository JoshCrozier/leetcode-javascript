/**
 * 975. Odd Even Jump
 * https://leetcode.com/problems/odd-even-jump/
 * Difficulty: Hard
 *
 * You are given an integer array arr. From some starting index, you can make a series of jumps.
 * The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd,
 * 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are
 * numbered, not the indices.
 *
 * You may jump forward from index i to index j (with i < j) in the following way:
 * - During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that
 *   arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such
 *   indices j, you can only jump to the smallest such index j.
 * - During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that
 *   arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such
 *   indices j, you can only jump to the smallest such index j.
 * - It may be the case that for some index i, there are no legal jumps.
 *
 * A starting index is good if, starting from that index, you can reach the end of the array (index
 * arr.length - 1) by jumping some number of times (possibly 0 or more than once).
 *
 * Return the number of good starting indices.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function(arr) {
  const oddCanReach = new Array(arr.length).fill(false);
  const evenCanReach = new Array(arr.length).fill(false);
  oddCanReach[arr.length - 1] = true;
  evenCanReach[arr.length - 1] = true;
  let result = 1;

  const sortedIndices = Array.from({ length: arr.length }, (_, i) => i);
  sortedIndices.sort((a, b) => arr[a] - arr[b] || a - b);

  const oddNext = new Array(arr.length);
  const evenNext = new Array(arr.length);
  const stack = [];

  for (const i of sortedIndices) {
    while (stack.length && stack[stack.length - 1] < i) {
      oddNext[stack.pop()] = i;
    }
    stack.push(i);
  }

  sortedIndices.sort((a, b) => arr[b] - arr[a] || a - b);
  stack.length = 0;

  for (const i of sortedIndices) {
    while (stack.length && stack[stack.length - 1] < i) {
      evenNext[stack.pop()] = i;
    }
    stack.push(i);
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (oddNext[i] !== undefined) {
      oddCanReach[i] = evenCanReach[oddNext[i]];
      if (oddCanReach[i]) result++;
    }
    if (evenNext[i] !== undefined) {
      evenCanReach[i] = oddCanReach[evenNext[i]];
    }
  }

  return result;
};
