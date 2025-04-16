/**
 * 1488. Avoid Flood in The City
 * https://leetcode.com/problems/avoid-flood-in-the-city/
 * Difficulty: Medium
 *
 * Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it
 * rains over the nth lake, the nth lake becomes full of water. If it rains over a lake that is
 * full of water, there will be a flood. Your goal is to avoid floods in any lake.
 *
 * Given an integer array rains where:
 * - rains[i] > 0 means there will be rains over the rains[i] lake.
 * - rains[i] == 0 means there are no rains this day and you can choose one lake this day and
 *   dry it.
 *
 * Return an array ans where:
 * - ans.length == rains.length
 * - ans[i] == -1 if rains[i] > 0.
 * - ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
 *
 * If there are multiple valid answers return any of them. If it is impossible to avoid flood return
 * an empty array.
 *
 * Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty
 * lake, nothing changes.
 */

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
  const fullLakes = new Map();
  const dryDays = [];
  const result = new Array(rains.length).fill(-1);

  for (let i = 0; i < rains.length; i++) {
    if (rains[i] === 0) {
      dryDays.push(i);
    } else {
      if (fullLakes.has(rains[i])) {
        const lastRain = fullLakes.get(rains[i]);
        let found = false;
        for (let j = 0; j < dryDays.length; j++) {
          if (dryDays[j] > lastRain) {
            result[dryDays[j]] = rains[i];
            dryDays.splice(j, 1);
            found = true;
            break;
          }
        }
        if (!found) return [];
      }
      fullLakes.set(rains[i], i);
    }
  }

  for (const dryDay of dryDays) {
    result[dryDay] = 1;
  }

  return result;
};
