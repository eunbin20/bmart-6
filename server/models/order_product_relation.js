const { Model } = require('sequelize');

class OrderProductRelation extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        orderId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        discountedPrice: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
      },
      {
        freezeTableName: true,
        sequelize,
      },
    );
  }

  static parseProductsForOrder(products, orderId) {
    return products.map((product) => {
      const { id: productId, title, price, discountedPrice, quantity } = product;
      return { orderId, productId, title, price, discountedPrice, quantity };
    });
  }
}

module.exports = OrderProductRelation;
