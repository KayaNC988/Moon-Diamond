const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/AuthMiddleware');

const {
    addFavorite,
    getMyFavorites,
    removeFavorite
} = require('../controllers/FavoriteController');

// Récupérer les favoris du client connecté
router.get('/', verifyToken, getMyFavorites);

// Ajouter un produit aux favoris
router.post('/', verifyToken, addFavorite);

// Supprimer un produit des favoris
router.delete('/:productId', verifyToken, removeFavorite);

module.exports = router;