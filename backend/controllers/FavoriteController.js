const { Favorite, Product, ProductImage } = require('../models');

const addFavorite = async (req, res) => {
    try {
        const userId = req.user.id;
        const { product_id } = req.body;

        if (!Number.isInteger(product_id) || product_id <= 0) {
            return res.status(400).json({
                error: 'Identifiant du produit invalide'
            });
        }

        const product = await Product.findByPk(product_id);

        if (!product) {
            return res.status(404).json({
                error: 'Produit introuvable'
            });
        }

        const [favorite, created] = await Favorite.findOrCreate({
            where: {
                user_id: userId,
                product_id
            }
        });

        if (!created) {
            return res.status(409).json({
                error: 'Ce produit est déjà dans vos favoris'
            });
        }

        return res.status(201).json({
            message: 'Produit ajouté aux favoris',
            favorite
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Erreur lors de l'ajout du favori"
        });
    }
};

const getMyFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.findAll({
            where: {
                user_id: req.user.id
            },
            include: [
                {
                    model: Product,
                    as: 'product',
                    include: [
                        {
                            model: ProductImage,
                            as: 'images'
                        }
                    ]
                }
            ],
            order: [['created_at', 'DESC']]
        });

        return res.status(200).json(favorites);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la récupération des favoris'
        });
    }
};

const removeFavorite = async (req, res) => {
    try {
        const productId = Number(req.params.productId);

        if (!Number.isInteger(productId) || productId <= 0) {
            return res.status(400).json({
                error: 'Identifiant du produit invalide'
            });
        }

        const favorite = await Favorite.findOne({
            where: {
                user_id: req.user.id,
                product_id: productId
            }
        });

        if (!favorite) {
            return res.status(404).json({
                error: 'Favori introuvable'
            });
        }

        await favorite.destroy();

        return res.status(200).json({
            message: 'Produit retiré des favoris'
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la suppression du favori'
        });
    }
};

module.exports = {
    addFavorite,
    getMyFavorites,
    removeFavorite
};