/**
 * 1348. Tweet Counts Per Frequency
 * https://leetcode.com/problems/tweet-counts-per-frequency/
 * Difficulty: Medium
 *
 * A social media company is trying to monitor activity on their site by analyzing the number
 * of tweets that occur in select periods of time. These periods can be partitioned into
 * smaller time chunks based on a certain frequency (every minute, hour, or day).
 *
 * For example, the period [10, 10000] (in seconds) would be partitioned into the following
 * time chunks with these frequencies:
 * - Every minute (60-second chunks): [10,69], [70,129], [130,189], ..., [9970,10000]
 * - Every hour (3600-second chunks): [10,3609], [3610,7209], [7210,10000]
 * - Every day (86400-second chunks): [10,10000]
 *
 * Notice that the last chunk may be shorter than the specified frequency's chunk size and will
 * always end with the end time of the period (10000 in the above example).
 *
 * Design and implement an API to help the company with their analysis.
 *
 * Implement the TweetCounts class:
 * - TweetCounts() Initializes the TweetCounts object.
 * - void recordTweet(String tweetName, int time) Stores the tweetName at the recorded time
 *   (in seconds).
 * - List<Integer> getTweetCountsPerFrequency(String freq, String tweetName, int startTime,
 *   int endTime) Returns a list of integers representing the number of tweets with tweetName
 *   in each time chunk for the given period of time [startTime, endTime] (in seconds) and
 *   frequency freq.
 * - freq is one of "minute", "hour", or "day" representing a frequency of every minute, hour,
 *   or day respectively.
 */

var TweetCounts = function() {
  this.tweets = new Map();
};

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  if (!this.tweets.has(tweetName)) {
    this.tweets.set(tweetName, []);
  }
  this.tweets.get(tweetName).push(time);
};

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
  let interval;
  if (freq === 'minute') interval = 60;
  else if (freq === 'hour') interval = 3600;
  else interval = 86400;

  const count = Math.floor((endTime - startTime) / interval) + 1;
  const result = new Array(count).fill(0);

  if (this.tweets.has(tweetName)) {
    for (const time of this.tweets.get(tweetName)) {
      if (time >= startTime && time <= endTime) {
        const index = Math.floor((time - startTime) / interval);
        result[index]++;
      }
    }
  }

  return result;
};
