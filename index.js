const express = require('express');
const Author = require('./models/Author');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
