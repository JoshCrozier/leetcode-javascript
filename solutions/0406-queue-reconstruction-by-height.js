/**
 * 406. Queue Reconstruction by Height
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 * Difficulty: Medium
 *
 * You are given an array of people, people, which are the attributes of some people in a queue
 * (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height
 * hi with exactly ki other people in front who have a height greater than or equal to hi.
 *
 * Reconstruct and return the queue that is represented by the input array people. The returned
 * queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of
 * the jth person in the queue (queue[0] is the person at the front of the queue).
 */

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  return people
    .sort(([h1, k1], [h2, k2]) => h2 - h1 || k1 - k2)
    .reduce((queue, person) => queue.splice(person[1], 0, person) && queue, []);
};
