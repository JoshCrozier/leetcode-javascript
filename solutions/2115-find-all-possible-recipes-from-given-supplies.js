/**
 * 2115. Find All Possible Recipes from Given Supplies
 * https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/
 * Difficulty: Medium
 *
 * You have information about n different recipes. You are given a string array recipes and a 2D
 * string array ingredients. The ith recipe has the name recipes[i], and you can create it if you
 * have all the needed ingredients from ingredients[i]. A recipe can also be an ingredient for
 * other recipes, i.e., ingredients[i] may contain a string that is in recipes.
 *
 * You are also given a string array supplies containing all the ingredients that you initially
 * have, and you have an infinite supply of all of them.
 *
 * Return a list of all the recipes that you can create. You may return the answer in any order.
 *
 * Note that two recipes may contain each other in their ingredients.
 */

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
  const available = new Set(supplies);
  const recipeGraph = new Map();
  const inDegree = new Map();
  const queue = [];
  const result = [];

  recipes.forEach((recipe, index) => {
    inDegree.set(recipe, ingredients[index].length);
    ingredients[index].forEach(ing => {
      if (!recipeGraph.has(ing)) recipeGraph.set(ing, []);
      recipeGraph.get(ing).push(recipe);
    });
  });

  available.forEach(supply => {
    if (recipeGraph.has(supply)) {
      recipeGraph.get(supply).forEach(recipe => {
        const count = inDegree.get(recipe) - 1;
        inDegree.set(recipe, count);
        if (count === 0) queue.push(recipe);
      });
    }
  });

  while (queue.length) {
    const currentRecipe = queue.shift();
    result.push(currentRecipe);
    if (recipeGraph.has(currentRecipe)) {
      recipeGraph.get(currentRecipe).forEach(nextRecipe => {
        const count = inDegree.get(nextRecipe) - 1;
        inDegree.set(nextRecipe, count);
        if (count === 0) queue.push(nextRecipe);
      });
    }
  }

  return result;
};
