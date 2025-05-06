/**
 * 2024. Maximize the Confusion of an Exam
 * https://leetcode.com/problems/maximize-the-confusion-of-an-exam/
 * Difficulty: Medium
 *
 * A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting
 * false. He wants to confuse the students by maximizing the number of consecutive questions with
 * the same answer (multiple trues or multiple falses in a row).
 *
 * You are given a string answerKey, where answerKey[i] is the original answer to the ith question.
 * In addition, you are given an integer k, the maximum number of times you may perform the
 * following operation:
 * - Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
 *
 * Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the
 * operation at most k times.
 */

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  const flipsLeft = k;
  const count = { T: 0, F: 0 };
  let result = 0;
  let left = 0;

  for (let right = 0; right < answerKey.length; right++) {
    count[answerKey[right]]++;
    const maxCount = Math.max(count.T, count.F);

    while (right - left + 1 - maxCount > flipsLeft) {
      count[answerKey[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
