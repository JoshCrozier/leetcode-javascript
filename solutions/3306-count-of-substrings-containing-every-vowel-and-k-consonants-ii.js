/**
 * 3306. Count of Substrings Containing Every Vowel and K Consonants II
 * https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/
 * Difficulty: Medium
 *
 * You are given a string word and a non-negative integer k.
 *
 * Return the total number of substrings of word that contain every vowel ('a', 'e', 'i', 'o', and
 * 'u') at least once and exactly k consonants.
 */

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
function countOfSubstrings(word, k) {
  return helper(word, k) - helper(word, k - 1);

  function helper(word, k) {
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    let count = 0;
    let left = 0;
    let consonants = k;

    for (let right = 0; right < word.length; right++) {
      const character = word[right];
      if (character in vowels) {
        vowels[character]++;
      } else {
        consonants--;
      }

      while (vowels.a > 0 && vowels.e > 0 && vowels.i > 0 && vowels.o > 0
             && vowels.u > 0 && consonants < 0) {
        const leftCharacter = word[left];
        if (leftCharacter in vowels) {
          vowels[leftCharacter]--;
        } else {
          consonants++;
        }
        left++;
      }
      count += right - left + 1;
    }
    return count;
  }
}
