const { Model } = require("sequelize");

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        isDeleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
      },
      {
        freezeTableName: true,
        sequelize,
      }
    );
  }
}

module.exports = User;
