const { Model } = require('sequelize');
const OrderProductRelation = require('./order_product_relation');

class Order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
        status: DataTypes.STRING,
        totalPrice: DataTypes.INTEGER,
        totalDiscountedPrice: DataTypes.INTEGER,
        isDeleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
      },
      {
        freezeTableName: true,
        sequelize,
      },
    );
  }

  static async beginTransaction() {
    return await this.sequelize.transaction();
  }

  static getTotalPrice(products) {
    return {
      totalPrice: products.map(({ price }) => price).reduce((a, b) => a + b),
      totalDiscountedPrice: products
        .map(({ discountedPrice }) => discountedPrice)
        .reduce((a, b) => a + b),
    };
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
    this.belongsToMany(models.Product, {
      foreignKey: 'orderId',
      targetKey: 'id',
      otherKey: 'productId',
      through: models.OrderProductRelation,
      as: 'orders',
    });
  }
}

module.exports = Order;
