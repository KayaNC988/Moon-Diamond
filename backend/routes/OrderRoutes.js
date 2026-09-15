const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin } = require('../middlewares/AuthMiddleware');
const OrdersController = require('../controllers/OrdersController');

// Reccupérer les commandes de l'utilisateur connecté
router.get('/', verifyToken, OrdersController.getMyOrders);

// Créer une commande
router.post('/', verifyToken, OrdersController.createOrder);

// Récupérer toutes les commandes - Administrateur
router.get('/all', verifyToken, isAdmin, OrdersController.getAllOrders);

// Modifier le statut d'une commande - Administrateur
router.patch('/:id/status', verifyToken, isAdmin, OrdersController.updateOrderStatus);

// Récupérer le détail d'une commande
router.get('/:id', verifyToken, OrdersController.getOrderById);


module.exports = router;