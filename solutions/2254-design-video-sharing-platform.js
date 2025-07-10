/**
 * 2254. Design Video Sharing Platform
 * https://leetcode.com/problems/design-video-sharing-platform/
 * Difficulty: Hard
 *
 * You have a video sharing platform where users can upload and delete videos. Each video is a
 * string of digits, where the ith digit of the string represents the content of the video at
 * minute i. For example, the first digit represents the content at minute 0 in the video, the
 * second digit represents the content at minute 1 in the video, and so on. Viewers of videos
 * can also like and dislike videos. Internally, the platform keeps track of the number of views,
 * likes, and dislikes on each video.
 *
 * When a video is uploaded, it is associated with the smallest available integer videoId starting
 * from 0. Once a video is deleted, the videoId associated with that video can be reused for
 * another video.
 *
 * Implement the VideoSharingPlatform class:
 * - VideoSharingPlatform() Initializes the object.
 * - int upload(String video) The user uploads a video. Return the videoId associated with
 *   the video.
 * - void remove(int videoId) If there is a video associated with videoId, remove the video.
 * - String watch(int videoId, int startMinute, int endMinute) If there is a video associated with
 *   videoId, increase the number of views on the video by 1 and return the substring of the video
 *   string starting at startMinute and ending at min(endMinute, video.length - 1) (inclusive).
 *   Otherwise, return "-1".
 * - void like(int videoId) Increases the number of likes on the video associated with videoId by 1
 *   if there is a video associated with videoId.
 * - void dislike(int videoId) Increases the number of dislikes on the video associated with videoId
 *   by 1 if there is a video associated with videoId.
 * - int[] getLikesAndDislikes(int videoId) Return a 0-indexed integer array values of length 2
 *   where values[0] is the number of likes and values[1] is the number of dislikes on the video
 *   associated with videoId. If there is no video associated with videoId, return [-1].
 * - int getViews(int videoId) Return the number of views on the video associated with videoId, if
 *   there is no video associated with videoId, return -1.
 */

var VideoSharingPlatform = function() {
  this.videos = new Map();
  this.availableIds = [];
  this.nextId = 0;
};

/**
 * @param {string} video
 * @return {number}
 */
VideoSharingPlatform.prototype.upload = function(video) {
  let videoId;
  if (this.availableIds.length > 0) {
    videoId = this.availableIds.shift();
  } else {
    videoId = this.nextId++;
  }

  this.videos.set(videoId, {
    content: video,
    views: 0,
    likes: 0,
    dislikes: 0
  });

  return videoId;
};

/**
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.remove = function(videoId) {
  if (this.videos.has(videoId)) {
    this.videos.delete(videoId);
    this.availableIds.push(videoId);
    this.availableIds.sort((a, b) => a - b);
  }
};

/**
 * @param {number} videoId
 * @param {number} startMinute
 * @param {number} endMinute
 * @return {string}
 */
VideoSharingPlatform.prototype.watch = function(videoId, startMinute, endMinute) {
  if (!this.videos.has(videoId)) {
    return '-1';
  }

  const videoData = this.videos.get(videoId);
  videoData.views++;

  const actualEndMinute = Math.min(endMinute, videoData.content.length - 1);
  return videoData.content.substring(startMinute, actualEndMinute + 1);
};

/**
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.like = function(videoId) {
  if (this.videos.has(videoId)) {
    this.videos.get(videoId).likes++;
  }
};

/**
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.dislike = function(videoId) {
  if (this.videos.has(videoId)) {
    this.videos.get(videoId).dislikes++;
  }
};

/**
 * @param {number} videoId
 * @return {number[]}
 */
VideoSharingPlatform.prototype.getLikesAndDislikes = function(videoId) {
  if (!this.videos.has(videoId)) {
    return [-1];
  }

  const videoData = this.videos.get(videoId);
  return [videoData.likes, videoData.dislikes];
};

/**
 * @param {number} videoId
 * @return {number}
 */
VideoSharingPlatform.prototype.getViews = function(videoId) {
  if (!this.videos.has(videoId)) {
    return -1;
  }

  return this.videos.get(videoId).views;
};
