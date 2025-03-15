/**
 * 797. All Paths From Source to Target
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 * Difficulty: Medium
 *
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths
 * from node 0 to node n - 1 and return them in any order.
 *
 * The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e.,
 * there is a directed edge from node i to node graph[i][j]).
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const target = graph.length - 1;
  const paths = [];

  const dfs = (node, path) => {
    if (node === target) {
      paths.push([...path]);
      return;
    }

    for (const neighbor of graph[node]) {
      path.push(neighbor);
      dfs(neighbor, path);
      path.pop();
    }
  };

  dfs(0, [0]);
  return paths;
};
