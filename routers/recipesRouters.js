const express = require('express');
const router = express.Router();

const {
  allRecipes,
} = require('../controller/Recipes');

router.get('/', allRecipes);

module.exports = router;
