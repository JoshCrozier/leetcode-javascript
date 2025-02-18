/**
 * 355. Design Twitter
 * https://leetcode.com/problems/design-twitter/
 * Difficulty: Medium
 *
 * Design a simplified version of Twitter where users can post tweets, follow/unfollow another user,
 * and is able to see the 10 most recent tweets in the user's news feed.
 *
 * Implement the Twitter class:
 * - Twitter() Initializes your twitter object.
 * - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user
 *   userId. Each call to this function will be made with a unique tweetId.
 * - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news
 *   feed. Each item in the news feed must be posted by users who the user followed or by the user
 *   themself. Tweets must be ordered from most recent to least recent.
 * - void follow(int followerId, int followeeId) The user with ID followerId started following the
 *   user with ID followeeId.
 * - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing
 *   the user with ID followeeId.
 */


var Twitter = function() {
  this.tweets = [];
  this.followers = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets.unshift([userId, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const result = [];
  for (let i = 0; i < this.tweets.length && result.length < 10; i++) {
    const [user, tweet] = this.tweets[i] ?? [];
    if (user === userId || (this.followers.get(userId) && this.followers.get(userId).has(user))) {
      result.push(tweet);
    }
  }
  return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followerId !== followeeId) {
    if (!this.followers.has(followerId)) {
      this.followers.set(followerId, new Set());
    }
    this.followers.get(followerId).add(followeeId);
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.followers.has(followerId)) {
    this.followers.get(followerId).delete(followeeId);
  }
};
