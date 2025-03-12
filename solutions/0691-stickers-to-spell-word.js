/**
 * 691. Stickers to Spell Word
 * https://leetcode.com/problems/stickers-to-spell-word/
 * Difficulty: Hard
 *
 * We are given n different types of stickers. Each sticker has a lowercase English word on it.
 *
 * You would like to spell out the given string target by cutting individual letters from your
 * collection of stickers and rearranging them. You can use each sticker more than once if you
 * want, and you have infinite quantities of each sticker.
 *
 * Return the minimum number of stickers that you need to spell out target. If the task is
 * impossible, return -1.
 *
 * Note: In all test cases, all words were chosen randomly from the 1000 most common US English
 * words, and target was chosen as a concatenation of two random words.
 */

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  const dp = new Map([['', 0]]);
  return helper(target);

  function helper(str) {
    if (dp.has(str)) return dp.get(str);
    let result = Infinity;

    for (const s of stickers.filter(s => s.includes(str[0]))) {
      result = Math.min(result, 1 + helper(calcDiff(str, s)));
    }

    dp.set(str, result === Infinity || result === 0 ? -1 : result);
    return dp.get(str);
  }

  function calcDiff(str1, str2) {
    for (const c of str2) {
      if (str1.includes(c)) str1 = str1.replace(c, '');
    }
    return str1;
  }
};
