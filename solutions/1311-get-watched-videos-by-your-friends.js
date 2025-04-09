/**
 * 1311. Get Watched Videos by Your Friends
 * https://leetcode.com/problems/get-watched-videos-by-your-friends/
 * Difficulty: Medium
 *
 * There are n people, each person has a unique id between 0 and n-1. Given the arrays watchedVideos
 * and friends, where watchedVideos[i] and friends[i] contain the list of watched videos and the
 * list of friends respectively for the person with id = i.
 *
 * Level 1 of videos are all watched videos by your friends, level 2 of videos are all watched
 * videos by the friends of your friends and so on. In general, the level k of videos are all
 * watched videos by people with the shortest path exactly equal to k with you. Given your id
 * and the level of videos, return the list of videos ordered by their frequencies (increasing).
 * For videos with the same frequency order them alphabetically from least to greatest.
 */

/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const visited = new Set([id]);
  let queue = [id];
  let currentLevel = 0;

  while (queue.length && currentLevel < level) {
    const nextQueue = [];
    queue.forEach(person => friends[person].forEach(friend => {
      if (!visited.has(friend)) {
        visited.add(friend);
        nextQueue.push(friend);
      }
    }));
    queue = nextQueue;
    currentLevel++;
  }

  const videoFrequency = new Map();
  queue.forEach(person => watchedVideos[person].forEach(video => {
    return videoFrequency.set(video, (videoFrequency.get(video) || 0) + 1);
  }));

  return [...videoFrequency.entries()]
    .sort((a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : a[1] - b[1])
    .map(([video]) => video);
};
