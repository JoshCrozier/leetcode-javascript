/**
 * 722. Remove Comments
 * https://leetcode.com/problems/remove-comments/
 * Difficulty: Medium
 *
 * Given a C++ program, remove comments from it. The program source is an array where source[i] is the i-th
 * line of the source code. This represents the result of splitting the original source code string by the
 * newline character \n.
 * In C++, there are two types of comments, line comments, and block comments.
 * The string // denotes a line comment, which represents that it and rest of the characters to the right
 * of it in the same line should be ignored.
 * The string /* denotes a block comment, which represents that all characters until the next
 * (non-overlapping) occurrence of should be ignored.
 * It is guaranteed that every open block comment will eventually be closed, so /* outside of a line or block
 * comment always starts a new comment.
 * Finally, implicit newline characters can be deleted by block comments.
 * After removing the comments from the source code, return the source code in the same format.
 */

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  return source.join('\n').replace(/\/\*.*?\*\/|\/\/[^\n]+/gs, '').split(/\n/).filter(Boolean);
};
