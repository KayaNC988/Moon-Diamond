const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductImage = sequelize.define('ProductImage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image_url: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    alt_text: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'product_images',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = ProductImage;