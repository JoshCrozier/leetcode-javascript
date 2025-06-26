/**
 * 800. Similar RGB Color
 * https://leetcode.com/problems/similar-rgb-color/
 * Difficulty: Easy
 *
 * The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand.
 * - For example, "#15c" is shorthand for the color "#1155cc".
 *
 * The similarity between the two colors "#ABCDEF" and "#UVWXYZ"
 * is -(AB - UV)2 - (CD - WX)2 - (EF - YZ)2.
 *
 * Given a string color that follows the format "#ABCDEF", return a string represents
 * the color that is most similar to the given color and has a shorthand (i.e., it can
 * be represented as some "#XYZ").
 *
 * Any answer which has the same highest similarity as the best answer will be accepted.
 */

/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
  const shorthandValues = [
    '00', '11', '22', '33', '44', '55', '66', '77',
    '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff'
  ];

  const red = helper(color.slice(1, 3));
  const green = helper(color.slice(3, 5));
  const blue = helper(color.slice(5, 7));

  return `#${red}${green}${blue}`;

  function helper(hex) {
    const value = parseInt(hex, 16);
    let minDiff = Infinity;
    let closest = '';

    for (const shorthand of shorthandValues) {
      const shorthandValue = parseInt(shorthand, 16);
      const diff = Math.abs(value - shorthandValue);
      if (diff < minDiff) {
        minDiff = diff;
        closest = shorthand;
      }
    }

    return closest;
  }
};
