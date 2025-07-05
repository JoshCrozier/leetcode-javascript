/**
 * 1820. Maximum Number of Accepted Invitations
 * https://leetcode.com/problems/maximum-number-of-accepted-invitations/
 * Difficulty: Medium
 *
 * There are m boys and n girls in a class attending an upcoming party.
 *
 * You are given an m x n integer matrix grid, where grid[i][j] equals 0 or 1. If grid[i][j] == 1,
 * then that means the ith boy can invite the jth girl to the party. A boy can invite at most one
 * girl, and a girl can accept at most one invitation from a boy.
 *
 * Return the maximum possible number of accepted invitations.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumInvitations = function(grid) {
  const boyCount = grid.length;
  const girlCount = grid[0].length;
  const girlMatched = new Array(girlCount).fill(-1);

  let result = 0;

  for (let boy = 0; boy < boyCount; boy++) {
    const visited = new Array(girlCount).fill(false);
    if (findMatch(boy, visited)) {
      result++;
    }
  }

  return result;

  function findMatch(boy, visited) {
    for (let girl = 0; girl < girlCount; girl++) {
      if (grid[boy][girl] && !visited[girl]) {
        visited[girl] = true;

        if (girlMatched[girl] === -1 || findMatch(girlMatched[girl], visited)) {
          girlMatched[girl] = boy;
          return true;
        }
      }
    }
    return false;
  }
};
