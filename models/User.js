/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Card, {
          foreignKey:{
            name: 'created_by',
            allowNull: false,
          },
        });
        User.hasMany(models.Card, {
          foreignKey:{
            name: 'assigned_to',
            allowNull: false,
          },
        });
      }
    }
  });

  return User;
};