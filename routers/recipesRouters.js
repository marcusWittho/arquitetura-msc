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
} = require('../controller/Recipes');

router.get('/', allRecipes);

router.get('/search', validateQueryName, recipeByName);

router.use(errorMiddleware);

module.exports = router;
