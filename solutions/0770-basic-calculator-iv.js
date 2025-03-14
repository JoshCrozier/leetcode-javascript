/**
 * 770. Basic Calculator IV
 * https://leetcode.com/problems/basic-calculator-iv/
 * Difficulty: Hard
 *
 * Given an expression such as expression = "e + 8 - a + 5" and an evaluation map such as {"e": 1}
 * (given in terms of evalvars = ["e"] and evalints = [1]), return a list of tokens representing
 * the simplified expression, such as ["-1*a","14"]
 * - An expression alternates chunks and symbols, with a space separating each chunk and symbol.
 * - A chunk is either an expression in parentheses, a variable, or a non-negative integer.
 * - A variable is a string of lowercase letters (not including digits.) Note that variables can
 *   be multiple letters, and note that variables never have a leading coefficient or unary operator
 *   like "2x" or "-x".
 *
 * Expressions are evaluated in the usual order: brackets first, then multiplication, then addition
 * and subtraction.
 *
 * - For example, expression = "1 + 2 * 3" has an answer of ["7"].
 *
 * The format of the output is as follows:
 * - For each term of free variables with a non-zero coefficient, we write the free variables within
 *   a term in sorted order lexicographically.
 *   - For example, we would never write a term like "b*a*c", only "a*b*c".
 * - Terms have degrees equal to the number of free variables being multiplied, counting
 *   multiplicity. We write the largest degree terms of our answer first, breaking ties by
 *   lexicographic order ignoring the leading coefficient of the term.
 *   - For example, "a*a*b*c" has degree 4.
 * - The leading coefficient of the term is placed directly to the left with an asterisk separating
 *   it from the variables (if they exist.) A leading coefficient of 1 is still printed.
 * - An example of a well-formatted answer is ["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"].
 * - Terms (including constant terms) with coefficient 0 are not included.
 *   - For example, an expression of "0" has an output of [].
 *
 * Note: You may assume that the given expression is always valid. All intermediate results will be
 * in the range of [-231, 231 - 1].
 */

/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
var basicCalculatorIV = function(expression, evalvars, evalints) {
  const map = new Map();
  for (let i = 0; i < evalvars.length; i++) {
    map.set(evalvars[i], evalints[i]);
  }

  const result = parse(expression, map);
  return result.toStringArray();

  function parse(expr, map) {
    const tokens = tokenize(expr);
    return parseExpr(tokens, 0, map)[0];
  }

  function tokenize(expr) {
    const tokens = [];
    let i = 0;

    while (i < expr.length) {
      if (expr[i] === ' ') {
        i++; continue;
      }

      if ('+-*()'.includes(expr[i])) {
        tokens.push(expr[i++]);
        continue;
      }

      if (/[a-z]/.test(expr[i])) {
        let variable = '';
        while (i < expr.length && /[a-z]/.test(expr[i])) {
          variable += expr[i++];
        }
        tokens.push(variable);
        continue;
      }

      if (/\d/.test(expr[i])) {
        let num = '';
        while (i < expr.length && /\d/.test(expr[i])) {
          num += expr[i++];
        }
        tokens.push(parseInt(num));
        continue;
      }

      i++;
    }

    return tokens;
  }

  function parseExpr(tokens, start, map) {
    let [left, pos] = parseTerm(tokens, start, map);

    while (pos < tokens.length && (tokens[pos] === '+' || tokens[pos] === '-')) {
      const op = tokens[pos];
      const [right, nextPos] = parseTerm(tokens, pos + 1, map);

      left = op === '+' ? left.add(right) : left.subtract(right);
      pos = nextPos;
    }

    return [left, pos];
  }

  function parseTerm(tokens, start, map) {
    let [left, pos] = parseFactor(tokens, start, map);

    while (pos < tokens.length && tokens[pos] === '*') {
      const [right, nextPos] = parseFactor(tokens, pos + 1, map);
      left = left.multiply(right);
      pos = nextPos;
    }

    return [left, pos];
  }

  function parseFactor(tokens, start, map) {
    const token = tokens[start];

    if (token === '(') {
      const [expr, pos] = parseExpr(tokens, start + 1, map);
      return [expr, pos + 1];
    }

    if (typeof token === 'string' && /[a-z]/.test(token)) {
      return map.has(token)
        ? [new Expression([new Term(map.get(token))]), start + 1]
        : [new Expression([new Term(1, [token])]), start + 1];
    }

    if (typeof token === 'number') {
      return [new Expression([new Term(token)]), start + 1];
    }

    throw new Error(`Unexpected token: ${token}`);
  }
};

class Term {
  constructor(coefficient = 0, variables = []) {
    this.coefficient = coefficient;
    this.variables = [...variables].sort();
  }

  multiply(other) {
    return new Term(
      this.coefficient * other.coefficient,
      [...this.variables, ...other.variables].sort()
    );
  }

  toString() {
    if (this.coefficient === 0) return '';
    if (this.variables.length === 0) return `${this.coefficient}`;
    return `${this.coefficient}*${this.variables.join('*')}`;
  }

  get degree() {
    return this.variables.length;
  }

  compare(other) {
    if (this.degree !== other.degree) return other.degree - this.degree;

    for (let i = 0; i < this.degree; i++) {
      if (this.variables[i] !== other.variables[i]) {
        return this.variables[i].localeCompare(other.variables[i]);
      }
    }
    return 0;
  }
}

class Expression {
  constructor(terms = []) {
    this.terms = terms;
  }

  add(other, multiplier = 1) {
    const termMap = new Map();

    for (const term of this.terms) {
      const key = term.variables.join('*');
      termMap.set(key, term);
    }

    for (const term of other.terms) {
      const key = term.variables.join('*');
      if (termMap.has(key)) {
        termMap.get(key).coefficient += term.coefficient * multiplier;
      } else {
        const newTerm = new Term(term.coefficient * multiplier, term.variables);
        this.terms.push(newTerm);
        termMap.set(key, newTerm);
      }
    }

    this.terms = this.terms.filter(term => term.coefficient !== 0);
    return this;
  }

  subtract(other) {
    return this.add(other, -1);
  }

  multiply(other) {
    const result = new Expression();

    for (const term1 of this.terms) {
      for (const term2 of other.terms) {
        const product = term1.multiply(term2);
        if (product.coefficient !== 0) {
          result.add(new Expression([product]));
        }
      }
    }

    return result;
  }

  toStringArray() {
    this.terms.sort((a, b) => a.compare(b));
    return this.terms.map(term => term.toString()).filter(Boolean);
  }
}
