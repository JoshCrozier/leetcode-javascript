/**
 * 433. Minimum Genetic Mutation
 * https://leetcode.com/problems/minimum-genetic-mutation/
 * Difficulty: Medium
 *
 * A gene string can be represented by an 8-character long string, with choices from
 * 'A', 'C', 'G', and 'T'.
 *
 * Suppose we need to investigate a mutation from a gene string startGene to a gene
 * string endGene where one mutation is defined as one single character changed in the
 * gene string.
 *
 * For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
 *
 * There is also a gene bank bank that records all the valid gene mutations. A gene must
 * be in bank to make it a valid gene string.
 *
 * Given the two gene strings startGene and endGene and the gene bank bank, return the
 * minimum number of mutations needed to mutate from startGene to endGene. If there is
 * no such a mutation, return -1.
 *
 * Note that the starting point is assumed to be valid, so it might not be included in
 * the bank.
 */

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  const set = new Set(bank);
  if (!set.has(endGene)) return -1;

  const queue = [[startGene, 0]];
  const seen = new Set([startGene]);

  while (queue.length) {
    const [gene, steps] = queue.shift();
    if (gene === endGene) return steps;

    for (let i = 0; i < 8; i++) {
      for (const char of ['A', 'C', 'G', 'T']) {
        if (char !== gene[i]) {
          const next = gene.slice(0, i) + char + gene.slice(i + 1);
          if (set.has(next) && !seen.has(next)) {
            queue.push([next, steps + 1]);
            seen.add(next);
          }
        }
      }
    }
  }

  return -1;
};
