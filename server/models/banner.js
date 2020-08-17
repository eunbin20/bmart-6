const { Model } = require('sequelize');

class Banner extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        imageUrl: DataTypes.STRING,
        redirectUrl: DataTypes.STRING,
        order: DataTypes.INTEGER,
        placement: DataTypes.STRING,
        expiredAt: DataTypes.DATE,
        startedAt: DataTypes.DATE,
      },
      {
        freezeTableName: true,
        sequelize,
      },
    );
  }
}

module.exports = Banner;
