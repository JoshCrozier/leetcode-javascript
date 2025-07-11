/**
 * 2355. Maximum Number of Books You Can Take
 * https://leetcode.com/problems/maximum-number-of-books-you-can-take/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array books of length n where books[i] denotes the number of
 * books on the ith shelf of a bookshelf.
 *
 * You are going to take books from a contiguous section of the bookshelf spanning from l to r
 * where 0 <= l <= r < n. For each index i in the range l <= i < r, you must take strictly fewer
 * books from shelf i than shelf i + 1.
 *
 * Return the maximum number of books you can take from the bookshelf.
 */

/**
 * @param {number[]} books
 * @return {number}
 */
var maximumBooks = function(books) {
  const n = books.length;
  const dp = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0
           && books[stack[stack.length - 1]] >= books[i] - (i - stack[stack.length - 1])) {
      stack.pop();
    }

    if (stack.length === 0) {
      const length = Math.min(i + 1, books[i]);
      dp[i] = (length * (2 * books[i] - length + 1)) / 2;
    } else {
      const prevIndex = stack[stack.length - 1];
      const length = i - prevIndex;
      dp[i] = dp[prevIndex] + (length * (2 * books[i] - length + 1)) / 2;
    }

    stack.push(i);
  }

  return Math.max(...dp);
};
