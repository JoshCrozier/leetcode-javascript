/**
 * 1579. Remove Max Number of Edges to Keep Graph Fully Traversable
 * https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/
 * Difficulty: Hard
 *
 * Alice and Bob have an undirected graph of n nodes and three types of edges:
 * - Type 1: Can be traversed by Alice only.
 * - Type 2: Can be traversed by Bob only.
 * - Type 3: Can be traversed by both Alice and Bob.
 *
 * Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type
 * typei between nodes ui and vi, find the maximum number of edges you can remove so that after
 * removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph
 * is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.
 *
 * Return the maximum number of edges you can remove, or return -1 if Alice and Bob cannot fully
 * traverse the graph.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  const alice = new UnionFind(n + 1);
  const bob = new UnionFind(n + 1);
  let removableEdges = 0;

  for (const [type, u, v] of edges) {
    if (type === 3) {
      const usedAlice = alice.union(u, v);
      const usedBob = bob.union(u, v);
      if (!usedAlice && !usedBob) {
        removableEdges++;
      }
    }
  }

  for (const [type, u, v] of edges) {
    if (type === 1) {
      if (!alice.union(u, v)) {
        removableEdges++;
      }
    } else if (type === 2) {
      if (!bob.union(u, v)) {
        removableEdges++;
      }
    }
  }

  return alice.components === 2 && bob.components === 2 ? removableEdges : -1;
};

class UnionFind {
  constructor(size) {
    this.parent = Array(size).fill().map((_, i) => i);
    this.rank = Array(size).fill(0);
    this.components = size;
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
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    this.components--;
    return true;
  }
}
