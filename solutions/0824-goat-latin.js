/**
 * 824. Goat Latin
 * https://leetcode.com/problems/goat-latin/
 * Difficulty: Easy
 *
 * A sentence S is given, composed of words separated by spaces.
 * Each word consists of lowercase and uppercase letters only.
 *
 * We would like to convert the sentence to "Goat Latin"
 * (a made-up language similar to Pig Latin.)
 *
 * The rules of Goat Latin are as follows:
 * - If a word begins with a vowel (a, e, i, o, or u), append "ma" to the
 *   end of the word. For example, the word 'apple' becomes 'applema'.
 * - If a word begins with a consonant (i.e. not a vowel), remove the
 *   first letter and append it to the end, then add "ma".
 *   For example, the word "goat" becomes "oatgma".
 * - Add one letter 'a' to the end of each word per its word index in
 *   the sentence, starting with 1.
 *   For example, the first word gets "a" added to the end, the second word gets
 *   "aa" added to the end and so on.
 *
 * Return the final sentence representing the conversion from S to Goat Latin.
 */

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ').map((word, index) => {
    return `${word.replace(/^([^aeiou])(.*)/ig, '$2$1')}ma${'a'.repeat(index + 1)}`;
  }).join(' ');
};
