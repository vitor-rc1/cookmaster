const conn = require('../config/conn');

const createRecipe = async (name, ingredients, preparation, userId) => conn()
  .then(async (db) => {
    const recipe = await db.collection('recipes').insertOne({
      name,
      ingredients,
      preparation,
      userId,
    });
    return recipe.ops[0];
  });

module.exports = {
  createRecipe,
};