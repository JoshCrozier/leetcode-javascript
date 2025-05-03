/**
 * 1948. Delete Duplicate Folders in System
 * https://leetcode.com/problems/delete-duplicate-folders-in-system/
 * Difficulty: Hard
 *
 * Due to a bug, there are many duplicate folders in a file system. You are given a 2D array
 * paths, where paths[i] is an array representing an absolute path to the ith folder in the
 * file system.
 * - For example, ["one", "two", "three"] represents the path "/one/two/three".
 *
 * Two folders (not necessarily on the same level) are identical if they contain the same
 * non-empty set of identical subfolders and underlying subfolder structure. The folders do
 * not need to be at the root level to be identical. If two or more folders are identical,
 * then mark the folders as well as all their subfolders.
 * - For example, folders "/a" and "/b" in the file structure below are identical. They (as
 *   well as their subfolders) should all be marked:
 *   - /a
 *   - /a/x
 *   - /a/x/y
 *   - /a/z
 *   - /b
 *   - /b/x
 *   - /b/x/y
 *   - /b/z
 * - However, if the file structure also included the path "/b/w", then the folders "/a" and "/b"
 *   would not be identical. Note that "/a/x" and "/b/x" would still be considered identical
 *   even with the added folder.
 *
 * Once all the identical folders and their subfolders have been marked, the file system will delete
 * all of them. The file system only runs the deletion once, so any folders that become identical
 * after the initial deletion are not deleted.
 *
 * Return the 2D array ans containing the paths of the remaining folders after deleting all the
 * marked folders. The paths may be returned in any order.
 */

/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function(paths) {
  const root = {};

  for (const path of paths) {
    let node = root;
    for (const folder of path) {
      if (!node[folder]) node[folder] = {};
      node = node[folder];
    }
  }

  const structures = new Map();

  const serialize = (node, path) => {
    if (Object.keys(node).length === 0) return '';

    const folders = [];
    const keys = Object.keys(node);
    for (const folder of keys) {
      const serialized = serialize(node[folder], [...path, folder]);
      if (serialized !== null) {
        folders.push(`${folder}(${serialized})`);
      } else {
        delete node[folder];
      }
    }

    folders.sort();
    const key = folders.join('');

    if (key.length > 0) {
      if (!structures.has(key)) {
        structures.set(key, []);
      }
      structures.get(key).push(path);
    }

    return key;
  };

  serialize(root, []);

  const toDelete = new Set();

  for (const [structure, paths] of structures.entries()) {
    if (paths.length > 1) {
      for (const path of paths) {
        toDelete.add(path.join('/'));
      }
    }
  }

  const result = [];

  const collectPaths = (node, path) => {
    const currentPath = path.join('/');
    if (toDelete.has(currentPath)) return;

    if (path.length > 0) {
      result.push([...path]);
    }

    const keys = Object.keys(node);
    for (const folder of keys) {
      collectPaths(node[folder], [...path, folder]);
    }
  };

  const rootFolders = Object.keys(root);
  for (const folder of rootFolders) {
    collectPaths(root[folder], [folder]);
  }

  return result;
};
