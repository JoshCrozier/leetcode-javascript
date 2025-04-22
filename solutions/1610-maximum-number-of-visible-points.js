/**
 * 1610. Maximum Number of Visible Points
 * https://leetcode.com/problems/maximum-number-of-visible-points/
 * Difficulty: Hard
 *
 * You are given an array points, an integer angle, and your location, where location = [posx, posy]
 * and points[i] = [xi, yi] both denote integral coordinates on the X-Y plane.
 *
 * Initially, you are facing directly east from your position. You cannot move from your position,
 * but you can rotate. In other words, posx and posy cannot be changed. Your field of view in
 * degrees is represented by angle, determining how wide you can see from any given view direction.
 * Let d be the amount in degrees that you rotate counterclockwise. Then, your field of view is the
 * inclusive range of angles [d - angle/2, d + angle/2].
 *
 * You can see some set of points if, for each point, the angle formed by the point, your position,
 * and the immediate east direction from your position is in your field of view.
 *
 * There can be multiple points at one coordinate. There may be points at your location, and you
 * can always see these points regardless of your rotation. Points do not obstruct your vision to
 * other points.
 *
 * Return the maximum number of points you can see.
 */

/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
  const angles = [];
  let originPoints = 0;
  const [x0, y0] = location;

  for (const [x, y] of points) {
    if (x === x0 && y === y0) {
      originPoints++;
      continue;
    }
    const radian = Math.atan2(y - y0, x - x0);
    const degree = (radian * 180) / Math.PI;
    angles.push(degree);
    angles.push(degree + 360);
  }

  angles.sort((a, b) => a - b);
  const threshold = angle;
  let maxVisible = 0;
  let left = 0;

  for (let right = 0; right < angles.length; right++) {
    while (angles[right] - angles[left] > threshold) {
      left++;
    }
    maxVisible = Math.max(maxVisible, right - left + 1);
  }

  return maxVisible + originPoints;
};
