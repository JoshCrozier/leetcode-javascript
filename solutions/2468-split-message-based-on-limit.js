/**
 * 2468. Split Message Based on Limit
 * https://leetcode.com/problems/split-message-based-on-limit/
 * Difficulty: Hard
 *
 * You are given a string, message, and a positive integer, limit.
 *
 * You must split message into one or more parts based on limit. Each resulting part should have
 * the suffix "<a/b>", where "b" is to be replaced with the total number of parts and "a" is to
 * be replaced with the index of the part, starting from 1 and going up to b. Additionally, the
 * length of each resulting part (including its suffix) should be equal to limit, except for the
 * last part whose length can be at most limit.
 *
 * The resulting parts should be formed such that when their suffixes are removed and they are
 * all concatenated in order, they should be equal to message. Also, the result should contain
 * as few parts as possible.
 *
 * Return the parts message would be split into as an array of strings. If it is impossible to
 * split message as required, return an empty array.
 */

/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function(message, limit) {
  const n = message.length;
  let digitSum = 0;

  for (let parts = 1; parts <= n; parts++) {
    digitSum += String(parts).length;
    const indexLength = String(parts).length * parts;
    const formatLength = 3 * parts;

    if (limit * parts - (digitSum + indexLength + formatLength) >= n) {
      const result = [];
      let index = 0;

      for (let i = 1; i <= parts; i++) {
        const suffix = `<${i}/${parts}>`;
        const chars = limit - suffix.length;
        result.push(message.slice(index, index + chars) + suffix);
        index += chars;
      }

      return result;
    }
  }

  return [];
};
