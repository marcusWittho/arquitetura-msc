const express = require('express');
const router = express.Router();

const errorMiddleware = require('../controller/errorMiddleware');

const {
  validateQueryName,
  // validateBodyName,
  // validatePrice
} = require('../validationMiddleware/validations');

const {
  allRecipes,
  recipeByName,
  recipeById,
  addRecipe,
} = require('../controller/Recipes');

router.get('/', allRecipes);

router.get('/search', validateQueryName, recipeByName);

router.get('/:id', recipeById);

router.post('/add', addRecipe);

router.use(errorMiddleware);

module.exports = router;
