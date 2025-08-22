/**
 * 2512. Reward Top K Students
 * https://leetcode.com/problems/reward-top-k-students/
 * Difficulty: Medium
 *
 * You are given two string arrays positive_feedback and negative_feedback, containing the words
 * denoting positive and negative feedback, respectively. Note that no word is both positive and
 * negative.
 *
 * Initially every student has 0 points. Each positive word in a feedback report increases the
 * points of a student by 3, whereas each negative word decreases the points by 1.
 *
 * You are given n feedback reports, represented by a 0-indexed string array report and a
 * 0-indexed integer array student_id, where student_id[i] represents the ID of the student
 * who has received the feedback report report[i]. The ID of each student is unique.
 *
 * Given an integer k, return the top k students after ranking them in non-increasing order
 * by their points. In case more than one student has the same points, the one with the lower
 * ID ranks higher.
 */

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
  const positiveSet = new Set(positive_feedback);
  const negativeSet = new Set(negative_feedback);
  const studentScores = [];

  for (let i = 0; i < report.length; i++) {
    const words = report[i].split(' ');
    let score = 0;

    for (const word of words) {
      if (positiveSet.has(word)) {
        score += 3;
      } else if (negativeSet.has(word)) {
        score -= 1;
      }
    }

    studentScores.push([student_id[i], score]);
  }

  studentScores.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0] - b[0];
  });

  return studentScores.slice(0, k).map(student => student[0]);
};
