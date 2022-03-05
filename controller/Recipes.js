const {
  getAllServices,
} = require('../services/Recipes');

const allRecipes = async (_req, res) => {
  const recipes = await getAllServices();

  if (recipes.length === 0) return res.status(404)
    .json({ message: "Nenhuma receita encontrada." });

  res.status(200).json(recipes);
}

module.exports = {
  allRecipes,
};
