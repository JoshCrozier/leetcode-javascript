/**
 * 588. Design In-Memory File System
 * https://leetcode.com/problems/design-in-memory-file-system/
 * Difficulty: Hard
 *
 * Design a data structure that simulates an in-memory file system.
 *
 * Implement the FileSystem class:
 * - FileSystem() Initializes the object of the system.
 * - List<String> ls(String path)
 *   - If path is a file path, returns a list that only contains this file's name.
 *   - If path is a directory path, returns the list of file and directory names in this directory.
 *   - The answer should in lexicographic order.
 * - void mkdir(String path) Makes a new directory according to the given path. The given directory
 *   path does not exist. If the middle directories in the path do not exist, you should create
 *   them as well.
 * - void addContentToFile(String filePath, String content)
 *   - If filePath does not exist, creates that file containing given content.
 *   - If filePath already exists, appends the given content to original content.
 * - String readContentFromFile(String filePath) Returns the content in the file at filePath.
 */

var FileSystem = function() {
  this.root = new Map();
};

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
  const parts = path === '/' ? [] : path.split('/').slice(1);
  let current = this.root;

  for (const part of parts) {
    current = current.get(part);
  }

  if (typeof current === 'string') {
    return [parts[parts.length - 1]];
  }

  return Array.from(current.keys()).sort();
};

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
  const parts = path.split('/').slice(1);
  let current = this.root;

  for (const part of parts) {
    if (!current.has(part)) {
      current.set(part, new Map());
    }
    current = current.get(part);
  }
};

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
  const parts = filePath.split('/').slice(1);
  const fileName = parts.pop();
  let current = this.root;

  for (const part of parts) {
    if (!current.has(part)) {
      current.set(part, new Map());
    }
    current = current.get(part);
  }

  const existingContent = current.get(fileName) || '';
  current.set(fileName, existingContent + content);
};

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
  const parts = filePath.split('/').slice(1);
  const fileName = parts.pop();
  let current = this.root;

  for (const part of parts) {
    current = current.get(part);
  }

  return current.get(fileName);
};
