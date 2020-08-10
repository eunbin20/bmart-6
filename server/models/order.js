const { Model } = require("sequelize");

class Order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
      },
      {
        freezeTableName: true,
        sequelize,
      }
    );
  }
}

module.exports = Order;
