/**
 * 1472. Design Browser History
 * https://leetcode.com/problems/design-browser-history/
 * Difficulty: Medium
 *
 * You have a browser of one tab where you start on the homepage and you
 * can visit another url, get back in the history number of steps or move
 * forward in the history number of steps.
 *
 * Implement the BrowserHistory class:
 *
 * - `BrowserHistory(string homepage)` Initializes the object with the
 *   homepage of the browser.
 * - `void visit(string url)` Visits url from the current page. It clears
 *   up all the forward history.
 * - `string back(int steps)` Move steps back in history. If you can only
 *   return x steps in the history and steps > x, you will return only x
 *   steps. Return the current url after moving back in history at most steps.
 * - `string forward(int steps)` Move steps forward in history. If you can
 *   only forward x steps in the history and steps > x, you will forward only
 *   x steps. Return the current url after forwarding in history at most steps.
 */

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = [];
  this.cursor = -1;
  this.visit(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history.splice(this.cursor + 1, this.history.length);
  this.history.push(url);
  this.cursor++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.cursor = Math.max(0, this.cursor - steps);
  return this.history[this.cursor];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.cursor = Math.min(this.cursor + steps, this.history.length - 1);
  return this.history[this.cursor];
};
