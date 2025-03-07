/**
 * 591. Tag Validator
 * https://leetcode.com/problems/tag-validator/
 * Difficulty: Hard
 *
 * Given a string representing a code snippet, implement a tag validator to parse the code and
 * return whether it is valid.
 *
 * A code snippet is valid if all the following rules hold:
 * 1. The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.
 * 2. A closed tag (not necessarily valid) has exactly the following format:
 *    <TAG_NAME>TAG_CONTENT</TAG_NAME>. Among them, <TAG_NAME> is the start tag, and </TAG_NAME>
 *    is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is valid
 *    if and only if the TAG_NAME and TAG_CONTENT are valid.
 * 3. A valid TAG_NAME only contain upper-case letters, and has length in range [1,9]. Otherwise,
 *    the TAG_NAME is invalid.
 * 4. A valid TAG_CONTENT may contain other valid closed tags, cdata and any characters (see
 *    note1) EXCEPT unmatched <, unmatched start and end tag, and unmatched or closed tags with
 *    invalid TAG_NAME. Otherwise, the TAG_CONTENT is invalid.
 * 5. A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa.
 *    However, you also need to consider the issue of unbalanced when tags are nested.
 * 6. A < is unmatched if you cannot find a subsequent >. And when you find a < or </, all
 *    the subsequent characters until the next > should be parsed as TAG_NAME (not necessarily
 *    valid).
 * 7. The cdata has the following format : <![CDATA[CDATA_CONTENT]]>. The range of CDATA_CONTENT
 *    is defined as the characters between <![CDATA[ and the first subsequent ]]>.
 * 8. CDATA_CONTENT may contain any characters. The function of cdata is to forbid the validator
 *    to parse CDATA_CONTENT, so even it has some characters that can be parsed as tag (no matter
 *    valid or invalid), you should treat it as regular characters.
 */

/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const stack = [];

  for (let i = 0; i < code.length;) {
    if (i > 0 && !stack.length) {
      return false;
    }
    if (code.startsWith('<![CDATA[', i)) {
      const j = i + 9;
      i = code.indexOf(']]>', j);
      if (i === -1) {
        return false;
      }
      i += 3;
    } else if (code.startsWith('</', i)) {
      const j = i + 2;
      i = code.indexOf('>', j);
      if (i === -1) {
        return false;
      }
      const tag = code.slice(j, i);
      if (!stack.length || stack.pop() !== tag || !/^[A-Z]{1,9}$/.test(tag)) {
        return false;
      }
      i++;
    } else if (code[i] === '<') {
      const j = i + 1;
      i = code.indexOf('>', j);
      if (i === -1) {
        return false;
      }
      const tag = code.slice(j, i);
      if (!/^[A-Z]{1,9}$/.test(tag)) {
        return false;
      }
      stack.push(tag);
      i++;
    } else {
      i++;
    }
  }

  return !stack.length;
};
