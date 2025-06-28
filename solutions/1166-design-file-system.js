/**
 * 1166. Design File System
 * https://leetcode.com/problems/design-file-system/
 * Difficulty: Medium
 *
 * You are asked to design a file system that allows you to create new paths and associate
 * them with different values.
 *
 * The format of a path is one or more concatenated strings of the form: / followed by one
 * or more lowercase English letters. For example, "/leetcode" and "/leetcode/problems" are
 * valid paths while an empty string "" and "/" are not.
 *
 * Implement the FileSystem class:
 * - bool createPath(string path, int value) Creates a new path and associates a value to it
 *   if possible and returns true. Returns false if the path already exists or its parent path
 *   doesn't exist.
 * - int get(string path) Returns the value associated with path or returns -1 if the path
 *   doesn't exist.
 */

var FileSystem = function() {
  this.pathMap = new Map();
};

/**
 * @param {string} path
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
  if (this.pathMap.has(path)) {
    return false;
  }

  const lastSlashIndex = path.lastIndexOf('/');
  const parentPath = path.substring(0, lastSlashIndex);

  if (parentPath.length > 0 && !this.pathMap.has(parentPath)) {
    return false;
  }

  this.pathMap.set(path, value);
  return true;
};

/**
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
  return this.pathMap.get(path) ?? -1;
};
