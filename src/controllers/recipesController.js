const recipesService = require('../services/recipesService');

const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { user } = req;
    const newRecipe = await recipesService.createRecipe(name, ingredients, preparation, user);
    res.status(201).json(newRecipe);
  } catch (error) {
    const { message, code } = error;
    res.status(code).json({
      message,
    });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipesService.getAllRecipes();
    res.status(200).json(allRecipes);
  } catch (error) {
    const { message, code } = error;
    res.status(code).json({
      message,
    });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
};