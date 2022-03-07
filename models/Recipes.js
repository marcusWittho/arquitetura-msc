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

module.exports = {
  getAll,
  getByName,
  getById
};
