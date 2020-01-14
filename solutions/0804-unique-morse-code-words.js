/**
 * 804. Unique Morse Code Words
 * https://leetcode.com/problems/unique-morse-code-words/
 * Difficulty: Easy
 *
 * International Morse Code defines a standard encoding where
 * each letter is mapped to a series of dots and dashes, as
 * follows: "a" maps to ".-", "b" maps to "-...",
 * "c" maps to "-.-.", and so on.
 *
 * For convenience, the full table for the 26 letters of the
 * English alphabet is given below:
 *
 * [".-","-...","-.-.","-..",".","..-.","--.","....","..",
 * ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
 * "...","-","..-","...-",".--","-..-","-.--","--.."]
 *
 * Now, given a list of words, each word can be written as a
 * concatenation of the Morse code of each letter.
 * For example, "cba" can be written as "-.-..--...",
 * (which is the concatenation "-.-." + "-..." + ".-").
 * We'll call such a concatenation, the transformation of a word.
 *
 * Return the number of different transformations
 * among all words we have.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
                 "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
                 "..-","...-",".--","-..-","-.--","--.."];
  const map = new Map(codes.map((v, i) => [String.fromCharCode(97 + i), v]));
  const transformed = words.map(word => word.split('').map(c => map.get(c)).join(''));
  return new Set(transformed).size;
};
