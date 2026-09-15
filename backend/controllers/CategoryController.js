const Category = require('../models/category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
    }
};


const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({
                error: 'Catégorie non trouvée'
            });
        }

        res.status(200).json(category);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Erreur lors de la récupération de la catégorie'
        });
    }
};


const createCategory = async (req, res) => {
    try {
        const { name, slug } = req.body;

        if (!name || !slug) {
            return res.status(400).json({
                error: 'Le nom et le slug sont obligatoires'
            });
        }

        const category = await Category.create({
            name,
            slug
        });

        res.status(201).json({
            message: 'Catégorie créée avec succès',
            category
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Erreur lors de la création de la catégorie'
        });
    }
};


const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({
                error: 'Catégorie non trouvée'
            });
        }

        const { name, slug } = req.body;

        await category.update({
            name: name ?? category.name,
            slug: slug ?? category.slug
        });

        res.status(200).json({
            message: 'Catégorie modifiée avec succès',
            category
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Erreur lors de la modification de la catégorie'
        });
    }
};


const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({
                error: 'Catégorie non trouvée'
            });
        }

        await category.destroy();

        res.status(200).json({
            message: 'Catégorie supprimée avec succès'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Erreur lors de la suppression de la catégorie'
        });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};

