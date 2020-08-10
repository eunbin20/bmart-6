const { Model } = require("sequelize");

class Subcategory extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        categoryId: DataTypes.INTEGER,
        name: DataTypes.STRING,
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

module.exports = Subcategory;
