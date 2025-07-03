/**
 * 1500. Design a File Sharing System
 * https://leetcode.com/problems/design-a-file-sharing-system/
 * Difficulty: Medium
 *
 * We will use a file-sharing system to share a very large file which consists of m small
 * chunks with IDs from 1 to m.
 *
 * When users join the system, the system should assign a unique ID to them. The unique ID
 * should be used once for each user, but when a user leaves the system, the ID can be reused again.
 *
 * Users can request a certain chunk of the file, the system should return a list of IDs of
 * all the users who own this chunk. If the user receives a non-empty list of IDs, they receive
 * the requested chunk successfully.
 *
 * Implement the FileSharing class:
 * - FileSharing(int m) Initializes the object with a file of m chunks.
 * - int join(int[] ownedChunks): A new user joined the system owning some chunks of the file,
 *   the system should assign an id to the user which is the smallest positive integer not
 *   taken by any other user. Return the assigned id.
 * - void leave(int userID): The user with userID will leave the system, you cannot take file
 *   chunks from them anymore.
 * - int[] request(int userID, int chunkID): The user userID requested the file chunk with chunkID.
 *   Return a list of the IDs of all users that own this chunk sorted in ascending order.
 */

/**
* @param {number} m
*/
var FileSharing = function(m) {
  this.chunkToUsers = new Array(m + 1).fill().map(() => new Set());
  this.userToChunks = new Map();
  this.availableIds = [];
  this.nextId = 1;
};

/**
* @param {number[]} ownedChunks
* @return {number}
*/
FileSharing.prototype.join = function(ownedChunks) {
  let userId;

  if (this.availableIds.length > 0) {
    userId = this.availableIds.sort((a, b) => a - b).shift();
  } else {
    userId = this.nextId++;
  }

  this.userToChunks.set(userId, new Set(ownedChunks));

  for (const chunk of ownedChunks) {
    this.chunkToUsers[chunk].add(userId);
  }

  return userId;
};

/**
* @param {number} userID
* @return {void}
*/
FileSharing.prototype.leave = function(userID) {
  const userChunks = this.userToChunks.get(userID);

  if (userChunks) {
    for (const chunk of userChunks) {
      this.chunkToUsers[chunk].delete(userID);
    }
    this.userToChunks.delete(userID);
    this.availableIds.push(userID);
  }
};

/**
* @param {number} userID
* @param {number} chunkID
* @return {number[]}
*/
FileSharing.prototype.request = function(userID, chunkID) {
  const usersWithChunk = Array.from(this.chunkToUsers[chunkID]).sort((a, b) => a - b);

  if (usersWithChunk.length > 0) {
    this.userToChunks.get(userID).add(chunkID);
    this.chunkToUsers[chunkID].add(userID);
  }

  return usersWithChunk;
};
