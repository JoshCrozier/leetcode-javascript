/**
 * 2152. Minimum Number of Lines to Cover Points
 * https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/
 * Difficulty: Medium
 *
 * You are given an array points where points[i] = [xi, yi] represents a point on an X-Y plane.
 *
 * Straight lines are going to be added to the X-Y plane, such that every point is covered by at
 * least one line.
 *
 * Return the minimum number of straight lines needed to cover all the points.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minimumLines = function(points) {
  const n = points.length;
  const linePoints = new Map();

  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      let a;
      let b;

      if (x1 === x2) {
        a = x1;
        b = Number.MAX_SAFE_INTEGER;
      } else {
        a = (y2 - y1) / (x2 - x1);
        b = y1 - a * x1;
      }

      const key = `${a},${b}`;
      if (!linePoints.has(key)) {
        linePoints.set(key, new Set());
      }
      linePoints.get(key).add(`${x1},${y1}`);
      linePoints.get(key).add(`${x2},${y2}`);
    }
  }

  const lines = [];
  for (const [line, pointSet] of linePoints) {
    if (pointSet.size > 2) {
      lines.push(line);
    }
  }

  let answer = Math.ceil(n / 2);
  const m = lines.length;

  for (let mask = 1; mask < (1 << m); mask++) {
    let j = 0;
    const lineCount = mask.toString(2).split('1').length - 1;
    const currentPoints = new Set();
    let tempMask = mask;

    while (tempMask > 0) {
      if (tempMask % 2) {
        const line = lines[m - 1 - j];
        for (const point of linePoints.get(line)) {
          currentPoints.add(point);
        }
      }
      tempMask >>= 1;
      j++;
    }

    answer = Math.min(answer, lineCount + Math.ceil((n - currentPoints.size) / 2));
  }

  return answer;
};
