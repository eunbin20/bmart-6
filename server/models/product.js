const { Model } = require("sequelize");

class Product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        subcategoryId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        discountedPrice: DataTypes.STRING,
        quantity: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        isDiscounted: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
        isSold: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
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

module.exports = Product;
