/**
 * 3433. Count Mentions Per User
 * https://leetcode.com/problems/count-mentions-per-user/
 * Difficulty: Medium
 *
 * You are given an integer numberOfUsers representing the total number of users and an
 * array events of size n x 3.
 *
 * Each events[i] can be either of the following two types:
 * 1. Message Event: ["MESSAGE", "timestampi", "mentions_stringi"]
 *   - This event indicates that a set of users was mentioned in a message at timestampi.
 *   - The mentions_stringi string can contain one of the following tokens:
 *     - id<number>: where <number> is an integer in range [0,numberOfUsers - 1]. There can
 *       be multiple ids separated by a single whitespace and may contain duplicates. This
 *       can mention even the offline users.
 *     - ALL: mentions all users.
 *     - HERE: mentions all online users.
 * 2. Offline Event: ["OFFLINE", "timestampi", "idi"]
 * - This event indicates that the user idi had become offline at timestampi for 60 time units.
 *   The user will automatically be online again at time timestampi + 60.
 *
 * Return an array mentions where mentions[i] represents the number of mentions the user with
 * id i has across all MESSAGE events.
 *
 * All users are initially online, and if a user goes offline or comes back online, their status
 * change is processed before handling any message event that occurs at the same timestamp.
 *
 * Note that a user can be mentioned multiple times in a single message event, and each mention
 * should be counted separately.
 */

/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
  const result = new Array(numberOfUsers).fill(0);
  const onlineAt = new Array(numberOfUsers).fill(0);

  events.sort((a, b) => {
    const timeCompare = parseInt(a[1], 10) - parseInt(b[1], 10);
    if (timeCompare !== 0) return timeCompare;
    return a[0] === 'MESSAGE' ? 1 : -1;
  });

  for (const [type, timestampStr, data] of events) {
    const timestamp = parseInt(timestampStr, 10);

    if (type === 'OFFLINE') {
      const userId = parseInt(data, 10);
      onlineAt[userId] = timestamp + 60;
    } else {
      if (data === 'ALL') {
        for (let i = 0; i < numberOfUsers; i++) {
          result[i]++;
        }
      } else if (data === 'HERE') {
        for (let i = 0; i < numberOfUsers; i++) {
          if (onlineAt[i] <= timestamp) {
            result[i]++;
          }
        }
      } else {
        const ids = data.replace(/id/g, '').split(' ');
        for (const id of ids) {
          result[parseInt(id, 10)]++;
        }
      }
    }
  }

  return result;
};
