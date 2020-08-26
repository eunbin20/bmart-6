const { Model, Op, literal } = require('sequelize');
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
        return [['discountedPrice', 'DESC']];
      case 'pricedown':
        return [['discountedPrice', 'ASC']];
      case 'new':
        return [['updatedAt', 'DESC']];
      case 'discountedRate':
        return [['discountedRate', 'DESC']];
      default:
        return [['id', 'ASC']];
    }
  }

  static addIsLikedAttribute(userId = -1) {
    return [
      literal(
        `(SELECT COUNT(*) FROM UserProductRelation WHERE userId = ${userId} and productId = Product.id)`,
      ),
      'isLiked',
    ];
  }

  static async filter({
    id,
    userId,
    limit = 20,
    offset = 0,
    title,
    subcategoryId,
    subcategoryIds,
    isDiscounted,
    sortBy,
  }) {
    return this.findAll({
      limit: +limit,
      offset: +offset,
      attributes: {
        include: [this.addIsLikedAttribute(userId)],
      },

      where: {
        ...(title && { title: { [Op.like]: `%${title}%` } }),
        ...(id && { id: +id }),
        ...(subcategoryId && { subcategoryId: +subcategoryId }),
        ...(subcategoryIds && { subcategoryId: subcategoryIds }),
        ...(isDiscounted && { isDiscounted: +isDiscounted }),
        isDeleted: false,
      },
      order: this.getOrder(sortBy),
    });
  }
}

module.exports = Product;
