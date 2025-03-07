/**
 * 609. Find Duplicate File in System
 * https://leetcode.com/problems/find-duplicate-file-in-system/
 * Difficulty: Medium
 *
 * Given a list paths of directory info, including the directory path, and all the files with
 * contents in this directory, return all the duplicate files in the file system in terms of
 * their paths. You may return the answer in any order.
 *
 * A group of duplicate files consists of at least two files that have the same content.
 *
 * A single directory info string in the input list has the following format:
 * - "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
 *
 * It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content
 * ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and
 * m >= 0. If m = 0, it means the directory is just the root directory.
 *
 * The output is a list of groups of duplicate file paths. For each group, it contains all the
 * file paths of the files that have the same content. A file path is a string that has the
 * following format:
 * - "directory_path/file_name.txt"
 */

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  const map = new Map();

  for (const path of paths) {
    const [directory, ...files] = path.split(' ');
    for (const file of files) {
      const [name, content] = file.split('(');
      const fullPath = `${directory}/${name}`;
      const fileContent = content.slice(0, -1);
      map.set(fileContent, (map.get(fileContent) || []).concat(fullPath));
    }
  }

  return Array.from(map.values()).filter(group => group.length > 1);
};
