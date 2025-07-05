/**
 * 1724. Checking Existence of Edge Length Limited Paths II
 * https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/
 * Difficulty: Hard
 *
 * An undirected graph of n nodes is defined by edgeList, where edgeList[i] = [ui, vi, disi]
 * denotes an edge between nodes ui and vi with distance disi. Note that there may be multiple
 * edges between two nodes, and the graph may not be connected.
 *
 * Implement the DistanceLimitedPathsExist class:
 * - DistanceLimitedPathsExist(int n, int[][] edgeList) Initializes the class with an
 *   undirected graph.
 * - boolean query(int p, int q, int limit) Returns true if there exists a path from p to q
 *   such that each edge on the path has a distance strictly less than limit, and otherwise
 *   false.
 */

/**
 * @param {number} n
 * @param {number[][]} edgeList
 */
var DistanceLimitedPathsExist = function(n, edgeList) {
  this.nodeCount = n;
  this.sortedEdges = edgeList.slice().sort((a, b) => a[2] - b[2]);
  this.unionFindByLimit = new Map();
  this.processedLimits = new Set();
};

/**
 * @param {number} p
 * @param {number} q
 * @param {number} limit
 * @return {boolean}
 */
DistanceLimitedPathsExist.prototype.query = function(p, q, limit) {
  if (!this.processedLimits.has(limit)) {
    const unionFind = new UnionFind(this.nodeCount);

    for (const [u, v, weight] of this.sortedEdges) {
      if (weight >= limit) break;
      unionFind.union(u, v);
    }

    this.unionFindByLimit.set(limit, unionFind);
    this.processedLimits.add(limit);
  }

  return this.unionFindByLimit.get(limit).connected(p, q);
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
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

    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
