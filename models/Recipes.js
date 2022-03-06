const connection = require('./connection');

const getAll = async () => {
  const [ recipes ] = await connection.execute(
    'SELECT id, name, price, wait_time FROM recipes'
  );

  return recipes;
}

const getByName = async (name) => {
  const [ recipes ] = await connection.execute(
    `SELECT * FROM recipes WHERE name=${name}`
  );

  return recipes;
}

module.exports = {
  getAll,
  getByName,
};
