const { Model, Op } = require('sequelize');

class Product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        subcategoryId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        discountedPrice: DataTypes.INTEGER,
        discountedRate: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
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
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Subcategory, {
      foreignKey: 'subcategoryId',
      targetKey: 'id',
    });
    this.belongsToMany(models.Order, {
      foreignKey: 'productId',
      targetKey: 'id',
      otherKey: 'orderId',
      through: models.OrderProductRelation,
      as: 'orders',
    });
    this.belongsToMany(models.User, {
      foreignKey: 'productId',
      targetKey: 'id',
      otherKey: 'userId',
      through: models.UserProductRelation,
      as: 'likes',
    });
  }

  static getOrder(sortBy) {
    switch (sortBy) {
      case 'priceup':
      case 'pricedown':
      case 'recent':
      case 'discount':
      default:
        return [['id', 'DESC']];
    }
  }

  static filter({ limit = 20, offset = 0, title, subcategoryId, isDiscounted, sortBy }) {
    return this.findAll({
      limit: +limit,
      offset: +offset,
      where: {
        ...(title && { title: { [Op.like]: `%${title}%` } }),
        ...(subcategoryId && { subcategoryId: +subcategoryId }),
        ...(isDiscounted && { isDiscounted: +isDiscounted }),
        isDeleted: false,
      },
      order: this.getOrder(sortBy),
    });
  }
}

module.exports = Product;
