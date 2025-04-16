/**
 * 1487. Making File Names Unique
 * https://leetcode.com/problems/making-file-names-unique/
 * Difficulty: Medium
 *
 * Given an array of strings names of size n. You will create n folders in your file system such
 * that, at the ith minute, you will create a folder with the name names[i].
 *
 * Since two files cannot have the same name, if you enter a folder name that was previously used,
 * the system will have a suffix addition to its name in the form of (k), where, k is the smallest
 * positive integer such that the obtained name remains unique.
 *
 * Return an array of strings of length n where ans[i] is the actual name the system will assign
 * to the ith folder when you create it.
 */

/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  const map = new Map();
  const result = [];

  for (const name of names) {
    if (!map.has(name)) {
      result.push(name);
      map.set(name, 1);
    } else {
      let suffix = map.get(name);
      let newName = `${name}(${suffix})`;
      while (map.has(newName)) {
        suffix++;
        newName = `${name}(${suffix})`;
      }
      result.push(newName);
      map.set(name, suffix + 1);
      map.set(newName, 1);
    }
  }

  return result;
};
