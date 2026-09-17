const { Product, ProductImage }= require('../models');

// Récupérer tous les produits
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ 
            include: [{ model: ProductImage, as: 'images' }]
        });
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [{ model: ProductImage, as: 'images' }]
        });

        if (!product) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération du produit' });
    }
};

const createProduct = async (req, res) => {
    try {
        const {
            name,
            slug,
            description,
            price,
            stock,
            width_cm,
            height_cm,
            status,
            category_id
        } = req.body;

        // Vérification des champs obligatoires
        if (
            !name ||
            !slug ||
            !description ||
            price === undefined ||
            width_cm === undefined ||
            height_cm === undefined ||
            category_id === undefined
        ) {
            return res.status(400).json({
                error: 'Tous les champs obligatoires doivent être renseignés'
            });
        }

        const product = await Product.create({
            name,
            slug,
            description,
            price,
            stock: stock ?? 1,
            width_cm,
            height_cm,
            status: status ?? 'draft',
            category_id
        });

        return res.status(201).json({
            message: 'Produit créé avec succès',
            product
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la création du produit'
        });
    }
};


const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({
                error: 'Produit non trouvé'
            });
        }

        const {
            name,
            slug,
            description,
            price,
            stock,
            width_cm,
            height_cm,
            status,
            category_id
        } = req.body;

        await product.update({
            name: name ?? product.name,
            slug: slug ?? product.slug,
            description: description ?? product.description,
            price: price ?? product.price,
            stock: stock ?? product.stock,
            width_cm: width_cm ?? product.width_cm,
            height_cm: height_cm ?? product.height_cm,
            status: status ?? product.status,
            category_id: category_id ?? product.category_id
        });

        return res.status(200).json({
            message: 'Produit modifié avec succès',
            product
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la modification du produit'
        });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({
                error: 'Produit non trouvé'
            });
        }

        await product.destroy();

        return res.status(200).json({
            message: 'Produit supprimé avec succès'
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la suppression du produit'
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};


