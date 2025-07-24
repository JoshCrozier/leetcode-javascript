/**
 * 3481. Apply Substitutions
 * https://leetcode.com/problems/apply-substitutions/
 * Difficulty: Medium
 *
 * You are given a replacements mapping and a text string that may contain placeholders
 * formatted as %var%, where each var corresponds to a key in the replacements mapping.
 * Each replacement value may itself contain one or more such placeholders. Each placeholder
 * is replaced by the value associated with its corresponding replacement key.
 *
 * Return the fully substituted text string which does not contain any placeholders.
 */

/**
 * @param {string[][]} replacements
 * @param {string} text
 * @return {string}
 */
var applySubstitutions = function(replacements, text) {
  const replacementMap = new Map(replacements);
  const cache = new Map();

  return text.replace(/%([A-Z])%/g, (match, key) => helper(key));

  function helper(key) {
    if (cache.has(key)) {
      return cache.get(key);
    }

    const value = replacementMap.get(key);
    const result = value.replace(/%([A-Z])%/g, (match, innerKey) => helper(innerKey));
    cache.set(key, result);
    return result;
  }
};
