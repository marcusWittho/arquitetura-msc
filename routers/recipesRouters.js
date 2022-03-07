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
  recipeById
} = require('../controller/Recipes');

router.get('/', allRecipes);

router.get('/search', validateQueryName, recipeByName);

router.get('/:id', recipeById);

router.use(errorMiddleware);

module.exports = router;
