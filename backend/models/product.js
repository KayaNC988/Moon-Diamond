const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },

        slug: {
            type: DataTypes.STRING(170),
            allowNull: false,
            unique: true
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },

        width_cm: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },

        height_cm: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },

        status: {
            type: DataTypes.ENUM('draft', 'available', 'sold'),
            allowNull: false,
            defaultValue: 'draft'
        },

        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

module.exports = Product;