/**
 * 2184. Number of Ways to Build Sturdy Brick Wall
 * https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/
 * Difficulty: Medium
 *
 * You are given integers height and width which specify the dimensions of a brick wall you are
 * building. You are also given a 0-indexed array of unique integers bricks, where the ith brick
 * has a height of 1 and a width of bricks[i]. You have an infinite supply of each type of brick
 * and bricks may not be rotated.
 *
 * Each row in the wall must be exactly width units long. For the wall to be sturdy, adjacent rows
 * in the wall should not join bricks at the same location, except at the ends of the wall.
 *
 * Return the number of ways to build a sturdy wall. Since the answer may be very large, return
 * it modulo 109 + 7.
 */

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
var buildWall = function(height, width, bricks) {
  const MOD = 1e9 + 7;
  const patterns = [];

  generatePatterns(0, []);

  if (patterns.length === 0) return 0;

  const graph = buildCompatibilityGraph();
  let dp = new Array(patterns.length).fill(1);
  for (let row = 1; row < height; row++) {
    const newDp = new Array(patterns.length).fill(0);

    for (let i = 0; i < patterns.length; i++) {
      for (const j of graph[i]) {
        newDp[i] = (newDp[i] + dp[j]) % MOD;
      }
    }

    dp = newDp;
  }

  return dp.reduce((sum, count) => (sum + count) % MOD, 0);

  function generatePatterns(currentWidth, currentPattern) {
    if (currentWidth === width) {
      patterns.push([...currentPattern]);
      return;
    }

    for (const brick of bricks) {
      if (currentWidth + brick <= width) {
        currentPattern.push(brick);
        generatePatterns(currentWidth + brick, currentPattern);
        currentPattern.pop();
      }
    }
  }

  function buildCompatibilityGraph() {
    const graph = Array.from({ length: patterns.length }, () => []);

    for (let i = 0; i < patterns.length; i++) {
      for (let j = 0; j < patterns.length; j++) {
        if (areCompatible(patterns[i], patterns[j])) {
          graph[i].push(j);
        }
      }
    }

    return graph;
  }

  function areCompatible(pattern1, pattern2) {
    const cuts1 = new Set();
    const cuts2 = new Set();

    let pos = 0;
    for (const brick of pattern1) {
      pos += brick;
      if (pos < width) cuts1.add(pos);
    }

    pos = 0;
    for (const brick of pattern2) {
      pos += brick;
      if (pos < width) cuts2.add(pos);
    }

    for (const cut of cuts1) {
      if (cuts2.has(cut)) return false;
    }

    return true;
  }
};
