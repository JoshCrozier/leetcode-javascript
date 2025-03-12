/**
 * 736. Parse Lisp Expression
 * https://leetcode.com/problems/parse-lisp-expression/
 * Difficulty: Hard
 *
 * You are given a string expression representing a Lisp-like expression to return the integer
 * value of.
 *
 * The syntax for these expressions is given as follows.
 * - An expression is either an integer, let expression, add expression, mult expression, or an
 *   assigned variable. Expressions always evaluate to a single integer.
 * - (An integer could be positive or negative.)
 * - A let expression takes the form "(let v1 e1 v2 e2 ... vn en expr)", where let is always the
 *   string "let", then there are one or more pairs of alternating variables and expressions,
 *   meaning that the first variable v1 is assigned the value of the expression e1, the second
 *   variable v2 is assigned the value of the expression e2, and so on sequentially; and then the
 *   value of this let expression is the value of the expression expr.
 * - An add expression takes the form "(add e1 e2)" where add is always the string "add", there are
 *   always two expressions e1, e2 and the result is the addition of the evaluation of e1 and the
 *   evaluation of e2.
 * - A mult expression takes the form "(mult e1 e2)" where mult is always the string "mult", there
 *   are always two expressions e1, e2 and the result is the multiplication of the evaluation of
 *   e1 and the evaluation of e2.
 * - For this question, we will use a smaller subset of variable names. A variable starts with a
 *   lowercase letter, then zero or more lowercase letters or digits. Additionally, for your
 *   convenience, the names "add", "let", and "mult" are protected and will never be used as
 *   variable names.
 * - Finally, there is the concept of scope. When an expression of a variable name is evaluated,
 *   within the context of that evaluation, the innermost scope (in terms of parentheses) is
 *   checked first for the value of that variable, and then outer scopes are checked sequentially.
 *   It is guaranteed that every expression is legal. Please see the examples for more details
 *   on the scope.
 */

/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function(expression) {
  return parse(expression, new Map());

  function parse(exp, scope) {
    if (!isNaN(exp)) return parseInt(exp);
    if (!exp.startsWith('(')) return scope.get(exp) || 0;

    const tokens = tokenize(exp.slice(1, -1));
    if (tokens[0] === 'add') return parse(tokens[1], scope) + parse(tokens[2], scope);
    if (tokens[0] === 'mult') return parse(tokens[1], scope) * parse(tokens[2], scope);

    const newScope = new Map(scope);
    for (let i = 1; i < tokens.length - 1; i += 2) {
      newScope.set(tokens[i], parse(tokens[i + 1], newScope));
    }
    return parse(tokens[tokens.length - 1], newScope);
  }

  function tokenize(exp) {
    const result = [];
    let current = '';
    let depth = 0;

    for (const char of exp) {
      if (char === ' ' && depth === 0) {
        result.push(current);
        current = '';
      } else {
        current += char;
        if (char === '(') depth++;
        if (char === ')') depth--;
      }
    }
    result.push(current);
    return result;
  }
};
