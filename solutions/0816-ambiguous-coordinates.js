/**
 * 816. Ambiguous Coordinates
 * https://leetcode.com/problems/ambiguous-coordinates/
 * Difficulty: Medium
 *
 * We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)". Then, we removed all commas,
 * decimal points, and spaces and ended up with the string s.
 * - For example, "(1, 3)" becomes s = "(13)" and "(2, 0.5)" becomes s = "(205)".
 *
 * Return a list of strings representing all possibilities for what our original coordinates could
 * have been.
 *
 * Our original representation never had extraneous zeroes, so we never started with numbers like
 * "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with
 * fewer digits. Also, a decimal point within a number never occurs without at least one digit
 * occurring before it, so we never started with numbers like ".1".
 *
 * The final answer list can be returned in any order. All coordinates in the final answer have
 * exactly one space between them (occurring after the comma.)
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
  const digits = s.slice(1, s.length - 1);
  const result = [];

  for (let i = 1; i < digits.length; i++) {
    const leftPart = digits.substring(0, i);
    const rightPart = digits.substring(i);

    const validLeftCoords = getValidCoordinates(leftPart);
    const validRightCoords = getValidCoordinates(rightPart);

    for (const left of validLeftCoords) {
      for (const right of validRightCoords) {
        result.push(`(${left}, ${right})`);
      }
    }
  }

  return result;
};

function getValidCoordinates(s) {
  const coords = [];

  if (isValidInteger(s)) {
    coords.push(s);
  }

  for (let i = 1; i < s.length; i++) {
    const integerPart = s.substring(0, i);
    const decimalPart = s.substring(i);

    if (isValidInteger(integerPart) && isValidDecimal(decimalPart)) {
      coords.push(`${integerPart}.${decimalPart}`);
    }
  }

  return coords;
}

function isValidInteger(s) {
  return s === '0' || s[0] !== '0';
}

function isValidDecimal(s) {
  return s[s.length - 1] !== '0';
}
