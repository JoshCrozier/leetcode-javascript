/**
 * 854. K-Similar Strings
 * https://leetcode.com/problems/k-similar-strings/
 * Difficulty: Hard
 *
 * Strings s1 and s2 are k-similar (for some non-negative integer k) if we can swap the positions
 * of two letters in s1 exactly k times so that the resulting string equals s2.
 *
 * Given two anagrams s1 and s2, return the smallest k for which s1 and s2 are k-similar.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
  if (s1 === s2) return 0;
  const queue = [s1];
  const visited = new Set([s1]);
  let swaps = 0;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current === s2) return swaps;
      let j = 0;
      while (j < current.length && current[j] === s2[j]) j++;
      for (let k = j + 1; k < current.length; k++) {
        if (current[k] === s2[j] && current[k] !== s2[k]) {
          const nextStr = swap(current, j, k);

          if (!visited.has(nextStr)) {
            if (nextStr === s2) return swaps + 1;
            visited.add(nextStr);
            queue.push(nextStr);
          }
        }
      }
    }
    swaps++;
  }

  return swaps;
};

function swap(str, i, j) {
  const chars = str.split('');
  [chars[i], chars[j]] = [chars[j], chars[i]];
  return chars.join('');
}
