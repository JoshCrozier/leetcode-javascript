/**
 * 1947. Maximum Compatibility Score Sum
 * https://leetcode.com/problems/maximum-compatibility-score-sum/
 * Difficulty: Medium
 *
 * There is a survey that consists of n questions where each question's answer is either 0
 * (no) or 1 (yes).
 *
 * The survey was given to m students numbered from 0 to m - 1 and m mentors numbered from
 * 0 to m - 1. The answers of the students are represented by a 2D integer array students
 * where students[i] is an integer array that contains the answers of the ith student
 * (0-indexed). The answers of the mentors are represented by a 2D integer array mentors
 * where mentors[j] is an integer array that contains the answers of the jth mentor (0-indexed).
 *
 * Each student will be assigned to one mentor, and each mentor will have one student assigned
 * to them. The compatibility score of a student-mentor pair is the number of answers that
 * are the same for both the student and the mentor.
 * - For example, if the student's answers were [1, 0, 1] and the mentor's answers were
 *   [0, 0, 1], then their compatibility score is 2 because only the second and the third
 *   answers are the same.
 *
 * You are tasked with finding the optimal student-mentor pairings to maximize the sum of the
 * compatibility scores.
 *
 * Given students and mentors, return the maximum compatibility score sum that can be achieved.
 */

/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
  const m = students.length;
  let maxScore = 0;

  backtrack(0, new Array(m).fill(false), 0);
  return maxScore;

  function calculateScore(student, mentor) {
    let score = 0;
    for (let i = 0; i < student.length; i++) {
      if (student[i] === mentor[i]) score++;
    }
    return score;
  }

  function backtrack(studentIndex, usedMentors, currentScore) {
    if (studentIndex === m) {
      maxScore = Math.max(maxScore, currentScore);
      return;
    }

    for (let mentorIndex = 0; mentorIndex < m; mentorIndex++) {
      if (!usedMentors[mentorIndex]) {
        usedMentors[mentorIndex] = true;
        backtrack(studentIndex + 1, usedMentors,
          currentScore + calculateScore(students[studentIndex], mentors[mentorIndex]));
        usedMentors[mentorIndex] = false;
      }
    }
  }
};
