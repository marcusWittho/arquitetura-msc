const connection = require('./connection');

const getAll = async () => {
  const [ recipes ] = await connection.execute(
    'SELECT id, name, price, wait_time FROM recipes'
  );

  return recipes;
}

const getByName = async (name) => {
  const [ recipes ] = await connection.execute(
    `SELECT * FROM recipes WHERE name LIKE '%${name}%'`
  );

  return recipes;
}

const getById = async (id) => {
  const [ recipe ] = await connection.execute(
    `SELECT * FROM recipes WHERE id=${id}`
  );

  return recipe;
}

const addRecipe = async (name, price, waitTime) => {
  await connection.execute(
    `INSERT INTO recipes (name, price, wait_time)
    VALUES ("${name}", ${price}, ${waitTime});`
  );

  return {
    status: 201,
    code: "Sucesso - Receita adicionada.",
    message: "Receita adicionada com sucesso."
  };
}

const updateRecipe = async (id, name, price, waitTime) => {
  await connection.execute(
    `UPDATE recipes
    SET name="${name}", price=${price}, wait_time=${waitTime}
    WHERE id=${id}`
  );

  return {
    status: 201,
    code: "Sucesso - Receita atualizada",
    message: "Receita atualizada com sucesso."
  };
}

module.exports = {
  getAll,
  getByName,
  getById,
  addRecipe,
  updateRecipe,
};
