/**
 * 3383. Minimum Runes to Add to Cast Spell
 * https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/
 * Difficulty: Hard
 *
 * Alice has just graduated from wizard school, and wishes to cast a magic spell to celebrate.
 * The magic spell contains certain focus points where magic needs to be concentrated, and some
 * of these focus points contain magic crystals which serve as the spell's energy source. Focus
 * points can be linked through directed runes, which channel magic flow from one focus point
 * to another.
 *
 * You are given a integer n denoting the number of focus points and an array of integers crystals
 * where crystals[i] indicates a focus point which holds a magic crystal. You are also given two
 * integer arrays flowFrom and flowTo, which represent the existing directed runes. The ith rune
 * allows magic to freely flow from focus point flowFrom[i] to focus point flowTo[i].
 *
 * You need to find the number of directed runes Alice must add to her spell, such that each
 * focus point either:
 * - Contains a magic crystal.
 * - Receives magic flow from another focus point.
 *
 * Return the minimum number of directed runes that she should add.
 */

/**
 * @param {number} n
 * @param {number[]} crystals
 * @param {number[]} flowFrom
 * @param {number[]} flowTo
 * @return {number}
 */
var minRunesToAdd = function(n, crystals, flowFrom, flowTo) {
  const graph = Array.from({ length: n }, () => []);
  const reverseGraph = Array.from({ length: n }, () => []);

  for (let i = 0; i < flowFrom.length; i++) {
    graph[flowFrom[i]].push(flowTo[i]);
    reverseGraph[flowTo[i]].push(flowFrom[i]);
  }

  const visited = new Array(n).fill(false);
  const finishOrder = [];

  const dfsFinish = (node) => {
    if (visited[node]) return;
    visited[node] = true;
    for (const neighbor of graph[node]) {
      dfsFinish(neighbor);
    }
    finishOrder.push(node);
  };

  for (let i = 0; i < n; i++) {
    dfsFinish(i);
  }

  const componentId = new Array(n).fill(-1);
  let componentCount = 0;

  const dfsComponent = (node, id) => {
    if (componentId[node] >= 0) return;
    componentId[node] = id;
    for (const neighbor of reverseGraph[node]) {
      dfsComponent(neighbor, id);
    }
  };

  for (let i = n - 1; i >= 0; i--) {
    const node = finishOrder[i];
    if (componentId[node] < 0) {
      dfsComponent(node, componentCount++);
    }
  }

  const hasIncoming = new Array(componentCount).fill(false);
  for (let i = 0; i < flowFrom.length; i++) {
    if (componentId[flowFrom[i]] !== componentId[flowTo[i]]) {
      hasIncoming[componentId[flowTo[i]]] = true;
    }
  }

  const hasCrystal = new Array(componentCount).fill(false);
  for (const crystal of crystals) {
    hasCrystal[componentId[crystal]] = true;
  }

  let result = 0;
  for (let i = 0; i < componentCount; i++) {
    if (!hasIncoming[i] && !hasCrystal[i]) {
      result++;
    }
  }

  return result;
};
