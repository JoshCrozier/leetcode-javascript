/**
 * 911. Online Election
 * https://leetcode.com/problems/online-election/
 * Difficulty: Medium
 *
 * You are given two integer arrays persons and times. In an election, the ith vote was cast for
 * persons[i] at time times[i].
 *
 * For each query at a time t, find the person that was leading the election at time t. Votes
 * cast at time t will count towards our query. In the case of a tie, the most recent vote (among
 * tied candidates) wins.
 *
 * Implement the TopVotedCandidate class:
 * - TopVotedCandidate(int[] persons, int[] times) Initializes the object with the persons and
 *   times arrays.
 * - int q(int t) Returns the number of the person that was leading the election at time t according
 *   to the mentioned rules.
 */

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.times = times;
  this.leaders = [];
  const voteCount = new Map();
  let maxVotes = 0;
  let currentLeader = 0;

  for (let i = 0; i < persons.length; i++) {
    const votes = (voteCount.get(persons[i]) || 0) + 1;
    voteCount.set(persons[i], votes);

    if (votes >= maxVotes) {
      maxVotes = votes;
      currentLeader = persons[i];
    }
    this.leaders[i] = currentLeader;
  }
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let left = 0;
  let right = this.times.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (this.times[middle] <= t) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return this.leaders[right];
};
