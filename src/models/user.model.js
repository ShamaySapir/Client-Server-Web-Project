module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastSearch: {
      type: Sequelize.TEXT,
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue("lastSearch"));
      },
      set: function (val) {
        return this.setDataValue("lastSearch", JSON.stringify(val));
      },
    },
  });

  return User;
};
