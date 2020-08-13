const { Model } = require('sequelize');

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
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      foreignKey: 'userId',
      targetKey: 'id',
      otherKey: 'productId',
      through: models.UserProductRelation,
      as: 'likes',
    });
    this.hasMany(models.Order, {
      foreignKey: 'userId',
      sourceKey: 'id',
    });
  }
}

module.exports = User;
