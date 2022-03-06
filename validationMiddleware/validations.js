const validateQueryName = (req, _res, next) => {
  const { name } = req.query;

  if (!name || name === '') {
    next({
      status: 400,
      code: "Erro (validate query name)",
      message: "Dados inválidos."
    });
  }

  next();
}

const validateBodyName = (req, _res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    next({
      status: 400,
      code: "Erro (validate body name)",
      message: "Dados inválidos."
    });
  }

  next();
}

const validatePrice = (req, _res, next) => {
  const { price } = req.body;

  if (!price || typeof price !== 'number' || price < 0) {
    next({
      status: 400,
      code: "Erro (validate price)",
      message: "Dados inválidos."
    });
  }

  next();
}

module.exports = {
  validateQueryName,
  validateBodyName,
  validatePrice
};
