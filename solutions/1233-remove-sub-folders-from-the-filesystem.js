/**
 * 1233. Remove Sub-Folders from the Filesystem
 * https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
 * Difficulty: Medium
 *
 * Given a list of folders, remove all sub-folders in those folders
 * and return in any order the folders after removing.
 *
 * If a folder[i] is located within another folder[j], it is called
 * a sub-folder of it. The format of a path is one or more concatenated
 * strings of the form: / followed by one or more lowercase English
 * letters. For example, /leetcode and /leetcode/problems are valid
 * paths while an empty string and / are not.
 */

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  const set = new Set(folder);
  return folder.filter(path => !getPathSegments(path).some(p => set.has(p)));
};

function getPathSegments(path) {
  const split = path.split('/');
  const segments = [split.shift()];
  while (split.length > 1) {
    segments.push(segments[segments.length - 1] + '/' + split.shift());
  }
  return segments;
}
