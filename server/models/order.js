const { Model } = require('sequelize');

class Order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
        status: DataTypes.STRING,
        totalPrice: DataTypes.INTEGER,
        totalDiscountedPrice: DataTypes.INTEGER,
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
