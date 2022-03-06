const rescue = require('express-rescue');

const {
  getAllServices, getByNameServices,
} = require('../services/Recipes');

const allRecipes = async (_req, res) => {
  const recipes = await getAllServices();

  if (recipes.length === 0) return res.status(404)
    .json({ message: "Nenhuma receita encontrada." });

  res.status(200).json(recipes);
}

const recipeByName = rescue(async (req, res, next) => {
  const { name } = req.query;
  console.log(name);
  const recipe = await getByNameServices(name);

  if (recipe.length === 0) {
    next({
      status: 404,
      code: "Erro recipeByName",
      message: "Nenhuma receita encontrada."
    });
  };

  res.status(200).json({ recipe });
})

module.exports = {
  allRecipes,
  recipeByName,
};
