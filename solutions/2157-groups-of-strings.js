/**
 * 2157. Groups of Strings
 * https://leetcode.com/problems/groups-of-strings/
 * Difficulty: Hard
 *
 * You are given a 0-indexed array of strings words. Each string consists of lowercase English
 * letters only. No letter occurs more than once in any string of words.
 *
 * Two strings s1 and s2 are said to be connected if the set of letters of s2 can be obtained
 * from the set of letters of s1 by any one of the following operations:
 * - Adding exactly one letter to the set of the letters of s1.
 * - Deleting exactly one letter from the set of the letters of s1.
 * - Replacing exactly one letter from the set of the letters of s1 with any letter, including
 *   itself.
 *
 * The array words can be divided into one or more non-intersecting groups. A string belongs
 * to a group if any one of the following is true:
 * - It is connected to at least one other string of the group.
 * - It is the only string present in the group.
 *
 * Note that the strings in words should be grouped in such a manner that a string belonging
 * to a group cannot be connected to a string present in any other group. It can be proved
 * that such an arrangement is always unique.
 *
 * Return an array ans of size 2 where:
 * - ans[0] is the maximum number of groups words can be divided into, and
 * - ans[1] is the size of the largest group.
 */

/**
 * @param {string[]} words
 * @return {number[]}
 */
var groupStrings = function(words) {
  const n = words.length;
  const masks = words.map(word => {
    let mask = 0;
    for (let i = 0; i < word.length; i++) {
      mask |= (1 << (word.charCodeAt(i) - 'a'.charCodeAt(0)));
    }
    return mask;
  });
  const uf = new UnionFind(n);
  const maskToIndex = new Map();
  for (let i = 0; i < n; i++) {
    if (maskToIndex.has(masks[i])) {
      uf.union(maskToIndex.get(masks[i]), i);
    } else {
      maskToIndex.set(masks[i], i);
    }
  }
  const processed = new Set();

  for (let i = 0; i < n; i++) {
    const mask = masks[i];
    if (processed.has(mask)) continue;
    processed.add(mask);

    for (let bit = 0; bit < 26; bit++) {
      if ((mask & (1 << bit)) === 0) {
        const newMask = mask | (1 << bit);
        if (maskToIndex.has(newMask)) {
          uf.union(i, maskToIndex.get(newMask));
        }
      }
    }

    for (let bit = 0; bit < 26; bit++) {
      if ((mask & (1 << bit)) !== 0) {
        const newMask = mask & ~(1 << bit);
        if (maskToIndex.has(newMask)) {
          uf.union(i, maskToIndex.get(newMask));
        }
      }
    }

    for (let remove = 0; remove < 26; remove++) {
      if ((mask & (1 << remove)) !== 0) {
        for (let add = 0; add < 26; add++) {
          if ((mask & (1 << add)) === 0) {
            const newMask = (mask & ~(1 << remove)) | (1 << add);
            if (maskToIndex.has(newMask)) {
              uf.union(i, maskToIndex.get(newMask));
            }
          }
        }
      }
    }
  }

  return [uf.count, uf.getMaxSize()];
};

class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill().map((_, i) => i);
    this.rank = Array(n).fill(0);
    this.count = n;
    this.sizes = Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
      this.sizes[rootY] += this.sizes[rootX];
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.sizes[rootX] += this.sizes[rootY];
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
      this.sizes[rootX] += this.sizes[rootY];
    }

    this.count--;
    return true;
  }

  getMaxSize() {
    let maxSize = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] === i) {
        maxSize = Math.max(maxSize, this.sizes[i]);
      }
    }
    return maxSize;
  }
}
