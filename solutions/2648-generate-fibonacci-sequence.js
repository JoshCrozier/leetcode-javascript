/**
 * 2648. Generate Fibonacci Sequence
 * https://leetcode.com/problems/generate-fibonacci-sequence/
 * Difficulty: Easy
 *
 * Write a generator function that returns a generator object which yields the fibonacci sequence.
 *
 * The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
 *
 * The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 */

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let current = 0;
  let next = 1;

  while (next) {
    yield current;
    [current, next] = [next, current + next];
  }
};
