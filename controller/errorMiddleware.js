const errorMiddleware = (err, _req, res, _next) => {
  if (err.status && err.code) {
    return res.status(err.status)
      .json({ message: err.message, code: err.code })
  }

  return res.status(500).json({ message: `Algo deu errado :( ${err.message})` });
}

module.exports = errorMiddleware;