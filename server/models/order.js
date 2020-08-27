const { Model } = require('sequelize');
const OrderProductRelation = require('./order_product_relation');
const { DELIVERY_STATUS } = require('../utils/constants');

class Order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userId: DataTypes.INTEGER,
        status: {
          type: DataTypes.STRING,
          defaultValue: DELIVERY_STATUS.PENDING,
        },
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

  static async createOrder(products, userId) {
    const t = await this.sequelize.transaction();
    try {
      const { dataValues: order } = await this.create(
        { userId, ...this.getTotalPrice(products) },
        { transaction: t },
      );
      const parsedProducts = this.parseProductsForOrder(products, order.id);
      await OrderProductRelation.bulkCreate(parsedProducts, { transaction: t });
      t.commit();
      return order;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  static getTotalPrice(products) {
    return {
      totalPrice: products.map(({ price }) => price).reduce((a, b) => a + b),
      totalDiscountedPrice: products
        .map(({ discountedPrice }) => discountedPrice)
        .reduce((a, b) => a + b),
    };
  }

  static parseProductsForOrder(products, orderId) {
    return products.map((product) => {
      const { id: productId, title, price, discountedPrice, quantity } = product;
      return { orderId, productId, title, price, discountedPrice, quantity };
    });
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
      as: 'products',
    });
  }
}

module.exports = Order;
