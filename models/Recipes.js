const connection = require('./connection');

const getAll = async () => {
  const [ recipes ] = await connection.execute(
    'SELECT id, name, price, wait_time FROM recipes'
  );

  return recipes;
}

module.exports = {
  getAll,
};
