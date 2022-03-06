const express = require('express');
const router = express.Router();

const {
  allRecipes,
  recipeByName,
} = require('../controller/Recipes');

router.get('/', allRecipes);

router.get('/search', recipeByName);

module.exports = router;
