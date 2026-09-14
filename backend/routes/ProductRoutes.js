const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middlewares/AuthMiddleware');

const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);

router.post('/', verifyToken, isAdmin, ProductController.createProduct);

router.put('/:id', verifyToken, isAdmin, ProductController.updateProduct);

router.delete('/:id', verifyToken, isAdmin, ProductController.deleteProduct);

module.exports = router;