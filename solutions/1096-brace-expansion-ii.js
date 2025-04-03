/**
 * 1096. Brace Expansion II
 * https://leetcode.com/problems/brace-expansion-ii/
 * Difficulty: Hard
 *
 * Under the grammar given below, strings can represent a set of lowercase words. Let R(expr)
 * denote the set of words the expression represents.
 *
 * The grammar can best be understood through simple examples:
 * - Single letters represent a singleton set containing that word.
 *   - R("a") = {"a"}
 *   - R("w") = {"w"}
 * - When we take a comma-delimited list of two or more expressions, we take the union of
 *   possibilities.
 *   - R("{a,b,c}") = {"a","b","c"}
 *   - R("{{a,b},{b,c}}") = {"a","b","c"} (notice the final set only contains each word
 *     at most once)
 * - When we concatenate two expressions, we take the set of possible concatenations between two
 *   words where the first word comes from the first expression and the second word comes from
 *   the second expression.
 *   - R("{a,b}{c,d}") = {"ac","ad","bc","bd"}
 *   - R("a{b,c}{d,e}f{g,h}") = {"abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh",
 *     "acefg", "acefh"}
 *
 * Formally, the three rules for our grammar:
 * - For every lowercase letter x, we have R(x) = {x}.
 * - For expressions e1, e2, ... , ek with k >= 2, we have R({e1, e2, ...}) = R(e1) ∪ R(e2) ∪ ...
 * - For expressions e1 and e2, we have R(e1 + e2) = {a + b for (a, b) in R(e1) × R(e2)},
 *   where + denotes concatenation, and × denotes the cartesian product.
 *
 * Given an expression representing a set of words under the given grammar, return the sorted list
 * of words that the expression represents.
 */

/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  function cartesian(set1, set2) {
    const result = new Set();
    for (const a of set1) {
      for (const b of set2) {
        result.add(a + b);
      }
    }
    return result;
  }

  function evaluate(exp) {
    let i = 0;

    function parseUnit() {
      let result = new Set();

      if (exp[i] === '{') {
        i++;
        result = parseExprList();
        i++;
      } else {
        result.add(exp[i]);
        i++;
      }

      return result;
    }

    function parseExprList() {
      const result = new Set();

      const firstExpr = parseExpr();
      for (const word of firstExpr) {
        result.add(word);
      }

      while (i < exp.length && exp[i] === ',') {
        i++;
        const nextExpr = parseExpr();
        for (const word of nextExpr) {
          result.add(word);
        }
      }

      return result;
    }

    function parseExpr() {
      let result = new Set(['']);

      while (i < exp.length && exp[i] !== ',' && exp[i] !== '}') {
        const unit = parseUnit();
        result = cartesian(result, unit);
      }

      return result;
    }

    return parseExprList();
  }

  return [...evaluate(expression)].sort();
};
