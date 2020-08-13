const { Model } = require('sequelize');

class OrderProductRelation extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        orderId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        price: DataTypes.STRING,
        discountedPrice: DataTypes.STRING,
        quantity: DataTypes.STRING,
      },
      {
        freezeTableName: true,
        sequelize,
      },
    );
  }
}

module.exports = OrderProductRelation;
