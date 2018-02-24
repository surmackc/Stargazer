var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 35],
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 7),
            allowNull: false,
            defaultValue: 0
        },
        longitude: {
            type: DataTypes.DECIMAL(10, 7),
            allowNull: false,
            defaultValue: 0
        }
    }, {
            freezeTableName: true,
            timestamps: false
        });
    return Users;
};