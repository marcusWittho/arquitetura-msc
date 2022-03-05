const express = require('express');
const bodyParser = require('body-parser');

const recipesRouters = require('./routers/recipesRouters');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/recipes', recipesRouters);

app.all('*', (req, res) => {
  return res.status(404)
    .json({ message: `Ops... Essa rota ${req.path} não existe.` });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
