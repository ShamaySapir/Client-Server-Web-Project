module.exports = (sequelize, Sequelize) => {
  const Viewed = sequelize.define("viewed", {
    userId: {
      // spoonacular recipe id only
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    recipeId: {
      // spoonacular recipe id only
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    favorite: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
  return Viewed;
};
