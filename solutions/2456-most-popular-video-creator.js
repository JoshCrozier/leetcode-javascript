/**
 * 2456. Most Popular Video Creator
 * https://leetcode.com/problems/most-popular-video-creator/
 * Difficulty: Medium
 *
 * You are given two string arrays creators and ids, and an integer array views, all of length n.
 * The ith video on a platform was created by creators[i], has an id of ids[i], and has views[i]
 * views.
 *
 * The popularity of a creator is the sum of the number of views on all of the creator's videos.
 * Find the creator with the highest popularity and the id of their most viewed video.
 * - If multiple creators have the highest popularity, find all of them.
 * - If multiple videos have the highest view count for a creator, find the lexicographically
 *   smallest id.
 *
 * Note: It is possible for different videos to have the same id, meaning that ids do not uniquely
 * identify a video. For example, two videos with the same ID are considered as distinct videos
 * with their own viewcount.
 *
 * Return a 2D array of strings answer where answer[i] = [creatorsi, idi] means that creatorsi
 * has the highest popularity and idi is the id of their most popular video. The answer can be
 * returned in any order.
 */

/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
  const map = new Map();

  for (let i = 0; i < creators.length; i++) {
    const creator = creators[i];
    const videoId = ids[i];
    const videoViews = views[i];

    if (!map.has(creator)) {
      map.set(creator, {
        totalViews: 0,
        mostViewedCount: -1,
        mostViewedId: ''
      });
    }

    const stats = map.get(creator);
    stats.totalViews += videoViews;

    if (videoViews > stats.mostViewedCount || (videoViews === stats.mostViewedCount
        && videoId < stats.mostViewedId)) {
      stats.mostViewedCount = videoViews;
      stats.mostViewedId = videoId;
    }
  }

  const maxViews = Math.max(...Array.from(map.values()).map(s => s.totalViews));

  const result = [];
  for (const [creator, stats] of map) {
    if (stats.totalViews === maxViews) {
      result.push([creator, stats.mostViewedId]);
    }
  }

  return result;
};
