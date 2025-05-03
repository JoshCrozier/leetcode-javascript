/**
 * 1916. Count Ways to Build Rooms in an Ant Colony
 * https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/
 * Difficulty: Hard
 *
 * You are an ant tasked with adding n new rooms numbered 0 to n-1 to your colony. You are given
 * the expansion plan as a 0-indexed integer array of length n, prevRoom, where prevRoom[i]
 * indicates that you must build room prevRoom[i] before building room i, and these two rooms
 * must be connected directly. Room 0 is already built, so prevRoom[0] = -1. The expansion plan
 * is given such that once all the rooms are built, every room will be reachable from room 0.
 *
 * You can only build one room at a time, and you can travel freely between rooms you have
 * already built only if they are connected. You can choose to build any room as long as its
 * previous room is already built.
 *
 * Return the number of different orders you can build all the rooms in. Since the answer may
 * be large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} prevRoom
 * @return {number}
 */
var waysToBuildRooms = function(prevRoom) {
  const n = prevRoom.length;
  const mod = 1e9 + 7;
  const graph = Array(n).fill().map(() => []);
  const factorial = Array(n + 1).fill(1n);
  const invFactorial = Array(n + 1).fill(1n);

  for (let i = 1; i <= n; i++) {
    factorial[i] = (factorial[i - 1] * BigInt(i)) % BigInt(mod);
  }

  for (let i = 1; i <= n; i++) {
    invFactorial[i] = modInverse(factorial[i], BigInt(mod));
  }

  for (let i = 1; i < n; i++) {
    graph[prevRoom[i]].push(i);
  }

  return Number(countSubtreeSizes(0)[1]);

  function countSubtreeSizes(node) {
    let size = 1;
    let result = 1n;

    for (const child of graph[node]) {
      const [childSize, childResult] = countSubtreeSizes(child);
      size += childSize;
      result = (result * childResult * invFactorial[childSize]) % BigInt(mod);
    }

    return [size, (result * factorial[size - 1]) % BigInt(mod)];
  }

  function modInverse(a, m) {
    const m0 = m;
    let q;
    let x0 = 0n;
    let x1 = 1n;

    while (a > 1n) {
      q = a / m;
      [a, m] = [m, a % m];
      [x0, x1] = [x1 - q * x0, x0];
    }
    return x1 < 0n ? x1 + m0 : x1;
  }
};
