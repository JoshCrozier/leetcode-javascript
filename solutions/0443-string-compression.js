/**
 * 443. String Compression
 * https://leetcode.com/problems/string-compression/
 * Difficulty: Medium
 *
 * Given an array of characters chars, compress it using the following algorithm:
 *
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 * - If the group's length is 1, append the character to s.
 * - Otherwise, append the character followed by the group's length.
 *
 * The compressed string s should not be returned separately, but instead, be stored in the
 * input character array chars. Note that group lengths that are 10 or longer will be split
 * into multiple characters in chars.
 *
 * After you are done modifying the input array, return the new length of the array.
 *
 * You must write an algorithm that uses only constant extra space.
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let pointer = 0;
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    let count = 0;
    while (i < chars.length && chars[i] === char) {
      count++;
      i++;
    }
    chars[pointer++] = char;
    if (count !== 1) {
      String(count).split('').forEach(n => chars[pointer++] = n);
    }
    i--;
  }
  chars.length = pointer;
  return pointer;
};
