/**
 * 1024. Video Stitching
 * https://leetcode.com/problems/video-stitching/
 * Difficulty: Medium
 *
 * You are given a series of video clips from a sporting event that lasted time seconds.
 * These video clips can be overlapping with each other and have varying lengths.
 *
 * Each video clip is described by an array clips where clips[i] = [starti, endi] indicates
 * that the ith clip started at starti and ended at endi.
 *
 * We can cut these clips into segments freely.
 * - For example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].
 *
 * Return the minimum number of clips needed so that we can cut the clips into segments that
 * cover the entire sporting event [0, time]. If the task is impossible, return -1.
 */

/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
  let count = 0;
  let currentEnd = 0;
  let nextEnd = 0;

  clips.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < clips.length && currentEnd < time;) {
    count++;
    while (i < clips.length && clips[i][0] <= currentEnd) {
      nextEnd = Math.max(nextEnd, clips[i][1]);
      i++;
    }
    if (nextEnd === currentEnd) return -1;
    currentEnd = nextEnd;
  }

  return currentEnd >= time ? count : -1;
};
