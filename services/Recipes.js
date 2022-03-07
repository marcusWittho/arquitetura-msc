const {
  getAll, getByName, getById,
} = require('../models/Recipes');

const serialize = (itemData) => {
  return {
    id: itemData.id,
    name: itemData.name,
    price: itemData.price,
    waitTime: itemData.wait_time
  };
}

const getAllServices = async () => {
  const recipes = await getAll();

  if (recipes.length === 0) return [];

  const items = recipes.map((item) => serialize(item));

  return items;
}

const getByNameServices = async (name) => {
  const recipe = await getByName(name);

  if (recipe.length === 0) return {
      status: 404,
      code: "Erro - recipe by name",
      message: "Nenhuma receita encontrada."
    };

  const items = recipe.map((item) => serialize(item));

  return items;
}

const getByIdServices = async (id) => {
  const recipe = await getById(id);

  if (recipe.length === 0) return {
    status: 404,
    code: "Erro - recipe by id",
    message: "Nenhuma receita encontrada."
  };

  return recipe;
}

module.exports = {
  getAllServices,
  getByNameServices,
  getByIdServices
};
