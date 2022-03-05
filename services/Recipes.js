const {
  getAll,
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

module.exports = {
  getAllServices,
};
