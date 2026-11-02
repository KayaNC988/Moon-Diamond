const { Product, ProductImage }= require('../models');
const ProducImage = require('../models/productImage');
const sequelize = require('../config/database');
const fs = require('fs');
const path = require('path');

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
    let transaction;
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
        const slugGenere = name
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

        const produitExistant = await Product.findOne({
            where: { slug: slugGenere }
        });
        if (produitExistant) {
            return res.status(409).json({
                error: "Un produit portant ce nom existe déjà."
            });
        }

        // Vérification des champs obligatoires
        if (
            !name ||
            !slugGenere ||
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

        transaction = await sequelize.transaction();

        const product = await Product.create({
            name,
            slug: slugGenere,
            description,
            price,
            stock: stock ?? 1,
            width_cm,
            height_cm,
            status: status ?? 'draft',
            category_id
        }, { transaction });
    

        if (req.files && req.files.length > 0) {
            const imagesProduit = req.files.map((file, index) => ({
                image_url: `/uploads/${file.filename}`,
                product_id: product.id,
                alt_text: `${name} - Image ${index + 1}`,
                position: index
            }));
            await ProductImage.bulkCreate(imagesProduit, { transaction });
        }

        await transaction.commit();

        return res.status(201).json({
            message: 'Produit créé avec succès',
            product
        });

    } catch (error) {
        if (transaction && !transaction.finished) {
            await transaction.rollback();
        }
            if (req.files && req.files.length > 0) {
                for (const file of req.files) {
                    try {
                        fs.unlinkSync(path.join(__dirname, '../uploads/', file.filename));
                    } catch (err) {
                        console.error("Erreur lors de la suppression du fichier :", err);
                    }
                }
            }
        
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


