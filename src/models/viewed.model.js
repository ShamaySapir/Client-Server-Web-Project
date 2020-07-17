module.exports = (sequelize, Sequelize) => {
  const Viewed = sequelize.define("viewed", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    recipeId: {
      // spoonacular recipe id only
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    seen: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    favorite: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
  return Viewed;
};
