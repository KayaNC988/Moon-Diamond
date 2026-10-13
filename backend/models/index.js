const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const OrderItem = require('./orderItem');
const ProductImage = require('./productImage');
const Favorite = require('./favorite');

// Un utilisateur peut avoir plusieurs commandes
User.hasMany(Order, {
    foreignKey: 'user_id',
    as: 'orders'
});

Order.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

// Une commande peut contenir plusieurs lignes de commande
Order.hasMany(OrderItem, {
    foreignKey: 'order_id',
    as: 'items'
});

OrderItem.belongsTo(Order, {
    foreignKey: 'order_id',
    as: 'order'
});

// Un produit peut apparaître dans plusieurs lignes de commande
Product.hasMany(OrderItem, {
    foreignKey: 'product_id',
    as: 'orderItems'
});

OrderItem.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});

// Un produit peut avoir plusieurs images
Product.hasMany(ProductImage, {
    foreignKey: 'product_id',
    as: 'images'
});

ProductImage.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});

// Associations de favoris
User.hasMany(Favorite, {
    foreignKey: 'user_Id',
    as: 'favorites'
});

Favorite.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

Product.hasMany(Favorite, {
    foreignKey: 'product_id',
    as: 'favorites'
});

Favorite.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});


module.exports = {
    User,
    Product,
    Order,
    OrderItem,
    ProductImage,
    Favorite
}

