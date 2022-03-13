const {
  getAll,
  getByName,
  getById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
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

const addRecipeServices = async (name, price, waitTime) => {
  const recipe = await addRecipe(name, price, waitTime);

  if (recipe.status !== 201) return {
    status: 500,
    code: "Erro - add recipe",
    message: "A receita não foi adicionada."
  };

  return recipe;
}

const updateRecipeServices = async (id, name, price, waitTime) => {
  const recipe = await updateRecipe(id, name, price, waitTime);

  if (recipe.status !== 201) return {
    status: 500,
    code: "Erro - update recipe",
    message: "A receita não foi atualizada."
  };

  return recipe;
}

const deleteRecipeServices = async (id) => {
  await deleteRecipe(id);
  const recipe = await getById(id);

  if (recipe.length !== 0) return {
    status: 500,
    code: "Erro - delete recipe",
    message: "A receita não foi deletada."
  }

  return {
    status: 201,
    code: "Sucesso - receita deletada",
    message: "A receita foi deletada com sucesso."
  }
}

module.exports = {
  getAllServices,
  getByNameServices,
  getByIdServices,
  addRecipeServices,
  updateRecipeServices,
  deleteRecipeServices
};
