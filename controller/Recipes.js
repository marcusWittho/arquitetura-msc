const rescue = require('express-rescue');

const {
  getAllServices,
  getByNameServices,
  getByIdServices
} = require('../services/Recipes');

const allRecipes = async (_req, res) => {
  const recipes = await getAllServices();

  if (recipes.length === 0) return res.status(404)
    .json({ message: "Nenhuma receita encontrada." });

  res.status(200).json(recipes);
}

const recipeByName = rescue(async (req, res, next) => {
  const { name } = req.query;
  const recipe = await getByNameServices(name);

  if (recipe.status === 404) return next(recipe);

  res.status(200).json({ recipe });
})

const recipeById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const recipe = await getByIdServices(id);

  if (recipe.status === 404) return next(recipe);

  res.status(200).json({ recipe });
})

module.exports = {
  allRecipes,
  recipeByName,
  recipeById
};
