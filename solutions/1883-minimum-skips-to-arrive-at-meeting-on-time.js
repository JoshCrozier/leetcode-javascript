/**
 * 1883. Minimum Skips to Arrive at Meeting On Time
 * https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/
 * Difficulty: Hard
 *
 * You are given an integer hoursBefore, the number of hours you have to travel to your meeting.
 * To arrive at your meeting, you have to travel through n roads. The road lengths are given as
 * an integer array dist of length n, where dist[i] describes the length of the ith road in
 * kilometers. In addition, you are given an integer speed, which is the speed (in km/h) you
 * will travel at.
 *
 * After you travel road i, you must rest and wait for the next integer hour before you can begin
 * traveling on the next road. Note that you do not have to rest after traveling the last road
 * because you are already at the meeting.
 * - For example, if traveling a road takes 1.4 hours, you must wait until the 2 hour mark before
 *   traveling the next road. If traveling a road takes exactly 2 hours, you do not need to wait.
 *
 * However, you are allowed to skip some rests to be able to arrive on time, meaning you do not
 * need to wait for the next integer hour. Note that this means you may finish traveling future
 * roads at different hour marks.
 * - For example, suppose traveling the first road takes 1.4 hours and traveling the second road
 *   takes 0.6 hours. Skipping the rest after the first road will mean you finish traveling the
 *   second road right at the 2 hour mark, letting you start traveling the third road immediately.
 *
 * Return the minimum number of skips required to arrive at the meeting on time, or -1 if it is
 * impossible.
 */

/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function(dist, speed, hoursBefore) {
  const n = dist.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let skips = 0; skips <= i; skips++) {
      if (skips < i) {
        const prevTime = dp[i - 1][skips];
        if (prevTime !== Infinity) {
          const time = prevTime + dist[i - 1];
          dp[i][skips] = Math.min(dp[i][skips], Math.ceil(time / speed) * speed);
        }
      }
      if (skips > 0) {
        const prevTime = dp[i - 1][skips - 1];
        if (prevTime !== Infinity) {
          dp[i][skips] = Math.min(dp[i][skips], prevTime + dist[i - 1]);
        }
      }
    }
  }

  const targetTime = hoursBefore * speed;
  for (let skips = 0; skips <= n; skips++) {
    if (dp[n][skips] <= targetTime) {
      return skips;
    }
  }

  return -1;
};
