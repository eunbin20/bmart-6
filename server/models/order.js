const { Model } = require('sequelize');

class Order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
      },
      {
        freezeTableName: true,
        sequelize,
      },
    );
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
