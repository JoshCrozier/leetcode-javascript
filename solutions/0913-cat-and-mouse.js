/**
 * 913. Cat and Mouse
 * https://leetcode.com/problems/cat-and-mouse/
 * Difficulty: Hard
 *
 * A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.
 *
 * The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of
 * the graph.
 *
 * The mouse starts at node 1 and goes first, the cat starts at node 2 and goes second, and
 * there is a hole at node 0.
 *
 * During each player's turn, they must travel along one edge of the graph that meets where they
 * are. For example, if the Mouse is at node 1, it must travel to any node in graph[1].
 *
 * Additionally, it is not allowed for the Cat to travel to the Hole (node 0).
 *
 * Then, the game can end in three ways:
 * - If ever the Cat occupies the same node as the Mouse, the Cat wins.
 * - If ever the Mouse reaches the Hole, the Mouse wins.
 * - If ever a position is repeated (i.e., the players are in the same position as a previous
 *   turn, and it is the same player's turn to move), the game is a draw.
 *
 * Given a graph, and assuming both players play optimally, return
 * - 1 if the mouse wins the game,
 * - 2 if the cat wins the game, or
 * - 0 if the game is a draw.
 */

/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function(graph) {
  const MOUSE_TURN = 0;
  const CAT_TURN = 1;
  const MOUSE_WIN = 1;
  const CAT_WIN = 2;
  const n = graph.length;

  const color = new Array(n).fill().map(() => {
    return new Array(n).fill().map(() => new Array(2).fill(0));
  });

  const degree = new Array(n).fill().map(() => {
    return new Array(n).fill().map(() => new Array(2).fill(0));
  });

  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let turn = 0; turn < 2; turn++) {
      color[0][i][turn] = MOUSE_WIN;
      queue.push([0, i, turn, MOUSE_WIN]);

      if (i > 0) {
        color[i][i][turn] = CAT_WIN;
        queue.push([i, i, turn, CAT_WIN]);
      }
    }
  }

  for (let m = 0; m < n; m++) {
    for (let c = 0; c < n; c++) {
      degree[m][c][MOUSE_TURN] = graph[m].length;
      degree[m][c][CAT_TURN] = graph[c].length;

      for (let x = 0; x < graph[c].length; x++) {
        if (graph[c][x] === 0) {
          degree[m][c][CAT_TURN]--;
          break;
        }
      }
    }
  }

  while (queue.length > 0) {
    const [mouse, cat, turn, result] = queue.shift();

    const prevTurn = 1 - turn;
    const prevPositions = [];

    if (prevTurn === MOUSE_TURN) {
      for (const prevMouse of graph[mouse]) {
        prevPositions.push([prevMouse, cat]);
      }
    } else {
      for (const prevCat of graph[cat]) {
        if (prevCat !== 0) {
          prevPositions.push([mouse, prevCat]);
        }
      }
    }

    for (const [prevMouse, prevCat] of prevPositions) {
      if (color[prevMouse][prevCat][prevTurn] !== 0) continue;

      if ((prevTurn === MOUSE_TURN && result === MOUSE_WIN)
          || (prevTurn === CAT_TURN && result === CAT_WIN)) {
        color[prevMouse][prevCat][prevTurn] = result;
        queue.push([prevMouse, prevCat, prevTurn, result]);
      } else {
        degree[prevMouse][prevCat][prevTurn]--;
        if (degree[prevMouse][prevCat][prevTurn] === 0) {
          color[prevMouse][prevCat][prevTurn] = result;
          queue.push([prevMouse, prevCat, prevTurn, result]);
        }
      }
    }
  }

  return color[1][2][MOUSE_TURN];
};
