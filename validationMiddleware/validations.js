const validateQueryName = (req, res, next) => {
  const { name } = req.query;

  if (!name) return res.status(400)
    .json({ message: "Dados inválidos. (Validate query name)" });

  next();
}

const validateBodyName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') return res.status(400)
    .json({ message: "Dados inválidos. (Validate body name)" });

  next();
}

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price || typeof price !== 'number' || price < 0) return res.status(400)
    .json({ message: "Dados inválidos. (Validate price)" });

  next();
}

module.exports = {
  validateQueryName,
  validateBodyName,
  validatePrice
};
