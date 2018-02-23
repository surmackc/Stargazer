var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 35],
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150],
      }
    },
    latitude: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false,
      defaultValue: 0
    },
    longitude: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return Events;
};
