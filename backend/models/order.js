const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM(
            'pending',
            'confirmed',
            'shipped',
            'completed',
            'cancelled'
        ),
        allowNull: false,
        defaultValue: 'pending'
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    shipping_firstname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    shipping_lastname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    shipping_address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    shipping_postal_code: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    shipping_city: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    shipping_country: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'orders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Order;