const { Model } = require('sequelize');

class UserProductRelation extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        productId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
      {
        freezeTableName: true,
        sequelize,
      },
    );
  }
}

module.exports = UserProductRelation;
