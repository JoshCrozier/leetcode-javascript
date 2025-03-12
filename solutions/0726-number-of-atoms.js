/**
 * 726. Number of Atoms
 * https://leetcode.com/problems/number-of-atoms/
 * Difficulty: Hard
 *
 * Given a string formula representing a chemical formula, return the count of each atom.
 *
 * The atomic element always starts with an uppercase character, then zero or more lowercase
 * letters, representing the name.
 *
 * One or more digits representing that element's count may follow if the count is greater
 * than 1. If the count is 1, no digits will follow.
 * - For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
 *
 * Two formulas are concatenated together to produce another formula.
 * - For example, "H2O2He3Mg4" is also a formula.
 *
 * A formula placed in parentheses, and a count (optionally added) is also a formula.
 * - For example, "(H2O2)" and "(H2O2)3" are formulas.
 *
 * Return the count of all elements as a string in the following form: the first name (in sorted
 * order), followed by its count (if that count is more than 1), followed by the second name
 * (in sorted order), followed by its count (if that count is more than 1), and so on.
 *
 * The test cases are generated so that all the values in the output fit in a 32-bit integer.
 */

/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  const [counts] = parseFormula(formula, 0);
  return [...counts].sort().map(([atom, count]) => atom + (count > 1 ? count : '')).join('');

  function parseFormula(str, index) {
    const atomCounts = new Map();
    while (index < str.length && str[index] !== ')') {
      if (str[index] === '(') {
        const [subCounts, nextIndex] = parseFormula(str, index + 1);
        const [multiplier, updatedIndex] = extractNumber(str, nextIndex + 1);
        for (const [atom, count] of subCounts) {
          atomCounts.set(atom, (atomCounts.get(atom) || 0) + count * (multiplier || 1));
        }
        index = updatedIndex;
      } else {
        const [atom, nextIndex] = extractAtom(str, index);
        const [count, updatedIndex] = extractNumber(str, nextIndex);
        atomCounts.set(atom, (atomCounts.get(atom) || 0) + (count || 1));
        index = updatedIndex;
      }
    }
    return [atomCounts, index];
  }

  function extractAtom(str, index) {
    let atom = str[index];
    while (++index < str.length && /[a-z]/.test(str[index])) atom += str[index];
    return [atom, index];
  }

  function extractNumber(str, index) {
    let number = 0;
    while (index < str.length && /[0-9]/.test(str[index])) {
      number = number * 10 + Number(str[index++]);
    }
    return [number || null, index];
  }
};
