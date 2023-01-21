/**
 * 502. IPO
 * https://leetcode.com/problems/ipo/
 * Difficulty: Hard
 *
 * Suppose LeetCode will start its IPO soon. In order to sell a good price of
 * its shares to Venture Capital, LeetCode would like to work on some projects
 * to increase its capital before the IPO. Since it has limited resources, it
 * can only finish at most k distinct projects before the IPO. Help LeetCode
 * design the best way to maximize its total capital after finishing at most
 * k distinct projects.
 *
 * You are given n projects where the ith project has a pure profit profits[i]
 * and a minimum capital of capital[i] is needed to start it.
 *
 * Initially, you have w capital. When you finish a project, you will obtain
 * its pure profit and the profit will be added to your total capital.
 *
 * Pick a list of at most k distinct projects from given projects to maximize
 * your final capital, and return the final maximized capital.
 *
 * The answer is guaranteed to fit in a 32-bit signed integer.
 */

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const queue = new MinPriorityQueue();
  const descendingQueue = new MaxPriorityQueue();

  for (let i = 0; i < capital.length; i++) {
    queue.enqueue([capital[i], profits[i]], capital[i]);
  }

  for (let i = 0; i < k; i++) {
    while (!queue.isEmpty() && queue.front().element[0] <= w) {
      const element = queue.dequeue().element;
      descendingQueue.enqueue(element, element[1]);
    }
    if (descendingQueue.isEmpty()) {
      return w;
    }
    w += descendingQueue.dequeue().element[1];
  }

  return w;
};
