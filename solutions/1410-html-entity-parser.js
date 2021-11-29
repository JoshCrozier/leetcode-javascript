/**
 * 1410. HTML Entity Parser
 * https://leetcode.com/problems/html-entity-parser/
 * Difficulty: Medium
 *
 * HTML entity parser is the parser that takes HTML code as input and replace all the
 * entities of the special characters by the characters itself.
 *
 * The special characters and their entities for HTML are:
 * - Quotation Mark: the entity is &quot; and symbol character is ".
 * - Single Quote Mark: the entity is &apos; and symbol character is '.
 * - Ampersand: the entity is &amp; and symbol character is &.
 * - Greater Than Sign: the entity is &gt; and symbol character is >.
 * - Less Than Sign: the entity is &lt; and symbol character is <.
 * - Slash: the entity is &frasl; and symbol character is /.
 *
 * Given the input text string to the HTML parser, you have to implement the entity parser.
 *
 * Return the text after replacing the entities by the special characters.
 */

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  const map = {
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&frasl;': '/'
  };

  return text.replace(new RegExp(Object.keys(map).join('|'), 'g'), m => map[m]);
};
