/**
 * 1797. Design Authentication Manager
 * https://leetcode.com/problems/design-authentication-manager/
 * Difficulty: Medium
 *
 * There is an authentication system that works with authentication tokens. For each session,
 * the user will receive a new authentication token that will expire timeToLive seconds after
 * the currentTime. If the token is renewed, the expiry time will be extended to expire
 * timeToLive seconds after the (potentially different) currentTime.
 *
 * Implement the AuthenticationManager class:
 * - AuthenticationManager(int timeToLive) constructs the AuthenticationManager and sets the
 *   timeToLive.
 * - generate(string tokenId, int currentTime) generates a new token with the given tokenId
 *   at the given currentTime in seconds.
 * - renew(string tokenId, int currentTime) renews the unexpired token with the given tokenId
 *   at the given currentTime in seconds. If there are no unexpired tokens with the given
 *   tokenId, the request is ignored, and nothing happens.
 * - countUnexpiredTokens(int currentTime) returns the number of unexpired tokens at the
 *   given currentTime.
 *
 * Note that if a token expires at time t, and another action happens on time t (renew or
 * countUnexpiredTokens), the expiration takes place before the other actions.
 */

/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive;
  this.tokens = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.tokens.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  if (this.tokens.has(tokenId) && this.tokens.get(tokenId) > currentTime) {
    this.tokens.set(tokenId, currentTime + this.timeToLive);
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  let count = 0;
  for (const [tokenId, expiry] of this.tokens) {
    if (expiry > currentTime) {
      count++;
    } else {
      this.tokens.delete(tokenId);
    }
  }
  return count;
};
