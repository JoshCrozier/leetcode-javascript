/**
 * 648. Replace Words
 * https://leetcode.com/problems/replace-words/
 * Difficulty: Medium
 *
 * In English, we have a concept called root, which can be followed by some other words
 * to form another longer word - let's call this word successor. For example, the root
 * an, followed by other, which can form another word another.
 *
 * Now, given a dictionary consisting of many roots and a sentence. You need to replace
 * all the successor in the sentence with the root forming it. If a successor has many
 * roots can form it, replace it with the root with the shortest length.
 *
 * You need to output the sentence after the replacement.
 */

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  const set = new Set(dict);
  return sentence.split(/\s+/).map(word => {
    for (let i = 1; i <= word.length; i++) {
      if (set.has(word.slice(0, i))) return word.slice(0, i);
    }
    return word;
  }).join(' ');
};
