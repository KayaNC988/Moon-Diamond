const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middlewares/AuthMiddleware');
const CategoryController = require('../controllers/CategoryController');

// Routes publiques
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);

// Routes administrateur
router.post('/', verifyToken, isAdmin, CategoryController.createCategory);
router.put('/:id', verifyToken, isAdmin, CategoryController.updateCategory);
router.delete('/:id', verifyToken, isAdmin, CategoryController.deleteCategory);

module.exports = router;