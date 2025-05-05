/**
 * 2019. The Score of Students Solving Math Expression
 * https://leetcode.com/problems/the-score-of-students-solving-math-expression/
 * Difficulty: Hard
 *
 * You are given a string s that contains digits 0-9, addition symbols '+', and multiplication
 * symbols '*' only, representing a valid math expression of single digit numbers (e.g., 3+5*2).
 * This expression was given to n elementary school students. The students were instructed to
 * get the answer of the expression by following this order of operations:
 * 1. Compute multiplication, reading from left to right; Then,
 * 2. Compute addition, reading from left to right.
 *
 * You are given an integer array answers of length n, which are the submitted answers of the
 * students in no particular order. You are asked to grade the answers, by following these rules:
 * - If an answer equals the correct answer of the expression, this student will be rewarded
 *   5 points;
 * - Otherwise, if the answer could be interpreted as if the student applied the operators in
 *   the wrong order but had correct arithmetic, this student will be rewarded 2 points;
 * - Otherwise, this student will be rewarded 0 points.
 *
 * Return the sum of the points of the students.
 */

/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function(s, answers) {
  const correct = eval(s.replace(/(\d)([*+])/g, '$1 $2 '));

  const n = s.length;
  const dp = new Map();

  function compute(start, end) {
    const key = `${start},${end}`;
    if (dp.has(key)) return dp.get(key);

    const results = new Set();
    if (start === end) {
      results.add(Number(s[start]));
      dp.set(key, results);
      return results;
    }

    for (let i = start + 1; i < end; i += 2) {
      const leftResults = compute(start, i - 1);
      const rightResults = compute(i + 1, end);
      const op = s[i];

      for (const left of leftResults) {
        for (const right of rightResults) {
          const val = op === '+' ? left + right : left * right;
          if (val <= 1000) results.add(val);
        }
      }
    }

    dp.set(key, results);
    return results;
  }

  const wrongAnswers = compute(0, n - 1);
  let result = 0;

  for (const answer of answers) {
    if (answer === correct) result += 5;
    else if (wrongAnswers.has(answer)) result += 2;
  }

  return result;
};
