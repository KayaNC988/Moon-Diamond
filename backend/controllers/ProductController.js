const Product = require('../models/product');

// Récupérer tous les produits
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
    }
};

module.exports = {
    getAllProducts
};