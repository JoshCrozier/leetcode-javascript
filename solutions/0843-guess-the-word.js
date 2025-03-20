/**
 * 843. Guess the Word
 * https://leetcode.com/problems/guess-the-word/
 * Difficulty: Hard
 *
 * You are given an array of unique strings words where words[i] is six letters long. One word of
 * words was chosen as a secret word.
 *
 * You are also given the helper object Master. You may call Master.guess(word) where word is a
 * six-letter-long string, and it must be from words. Master.guess(word) returns:
 * - -1 if word is not from words, or
 * - an integer representing the number of exact matches (value and position) of your guess to
 *   the secret word.
 *
 * There is a parameter allowedGuesses for each test case where allowedGuesses is the maximum
 * number of times you can call Master.guess(word).
 *
 * For each test case, you should call Master.guess with the secret word without exceeding the
 * maximum number of allowed guesses. You will get:
 * - "Either you took too many guesses, or you did not find the secret word." if you called
 *   Master.guess more than allowedGuesses times or if you did not call Master.guess with the
 *   secret word, or
 * - "You guessed the secret word correctly." if you called Master.guess with the secret word
 *   with the number of calls to Master.guess less than or equal to allowedGuesses.
 *
 * The test cases are generated such that you can guess the secret word with a reasonable
 * strategy (other than using the bruteforce method).
 */

/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(words, master) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const matchCount = master.guess(randomWord);

    if (matchCount === 6) return;

    words = words.filter(word =>
      matchCount === -1
        ? countMatches(word, randomWord) === 0
        : countMatches(word, randomWord) === matchCount
    );
  }

  function countMatches(word1, word2) {
    let matches = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) matches++;
    }
    return matches;
  }
};
