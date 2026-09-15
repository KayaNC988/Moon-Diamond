const { Order, OrderItem, Product } = require('../models');

// Création d'une commande
const createOrder = async (req, res) => {
    try {
        const {
            shipping_firstname,
            shipping_lastname,
            shipping_address,
            shipping_postal_code,
            shipping_city,
            shipping_country,
            items
        } = req.body;

        // Vérification des informations de livraison
        if (
            !shipping_firstname ||
            !shipping_lastname ||
            !shipping_address ||
            !shipping_postal_code ||
            !shipping_city ||
            !shipping_country
        ) {
            return res.status(400).json({
                error: 'Toutes les informations de livraison sont obligatoires'
            });
        }

        // Vérification du panier
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                error: 'La commande doit contenir au moins un produit'
            });
        }

        // Vérification des produits et calcul du total
let total = 0;

for (const item of items) {
    const { product_id, quantity } = item;

    // Vérification de la quantité
    if (!product_id || !Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({
            error: 'Produit ou quantité invalide'
        });
    }

    // Recherche du produit dans la base de données
    const product = await Product.findByPk(product_id);

    if (!product) {
        return res.status(404).json({
            error: `Produit ${product_id} non trouvé`
        });
    }

    // Vérification du stock disponible
    if (product.stock < quantity) {
        return res.status(400).json({
            error: `Stock insuffisant pour le produit ${product.name}`
        });
    }

    // Calcul avec le prix enregistré dans la BDD
    total += Number(product.price) * quantity;
}

// Création de la commande en base de données
const order = await Order.create({
    status: 'pending',
    total: Number(total.toFixed(2)),
    shipping_firstname,
    shipping_lastname,
    shipping_address,
    shipping_postal_code,
    shipping_city,
    shipping_country,
    user_id: req.user.id
});
    

// Création des lignes de commande
for (const item of items) {
    const product = await Product.findByPk(item.product_id);

    await OrderItem.create({
        quantity: item.quantity,
        unit_price: product.price, // Utilisation du prix enregistré dans la BDD
        order_id: order.id,
        product_id: item.product_id
    });

    // Mise à jour du stock du produit
    await product.update({
        stock: product.stock - item.quantity
    });

}

        return res.status(201).json({
            message: 'Commande créée avec succès',
            order_id: order.id,
            total: Number(total.toFixed(2))
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la création de la commande',
          
        });
    }
};

// Récupération des commandes de l'utilisateur connecté
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: {
                user_id: req.user.id
            },
            order: [['created_at', 'DESC']]
        });

        return res.status(200).json(orders);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la récupération des commandes'
        });
    }
};

// Récupération du détail d'une commande
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({
            where: {
                id: req.params.id,
                user_id: req.user.id
            },
            include: [
                {
                    model: OrderItem,
                    as: 'items',
                    include: [
                        {
                            model: Product,
                            as: 'product'
                        }
                    ]
                }
            ]
        });

        if (!order) {
            return res.status(404).json({
                error: 'Commande non trouvée'
            });
        }

        return res.status(200).json(order);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la récupération de la commande'
        });
    }
};

// Récupération de toutes les commandes - Administrateur
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [
                {
                    model: OrderItem,
                    as: 'items',
                    include: [
                        {
                            model: Product,
                            as: 'product'
                        }
                    ]
                }
            ],
            order: [['created_at', 'DESC']]
        });

        return res.status(200).json(orders);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la récupération des commandes'
        });
    }
};

// Modifier le statut d'une commande - Administrateur
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const allowedStatuses = [
            'pending',
            'paid',
            'shipped',
            'completed',
            'cancelled'
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                error: 'Statut de commande invalide'
            });
        }

        const order = await Order.findByPk(req.params.id);

        if (!order) {
            return res.status(404).json({
                error: 'Commande non trouvée'
            });
        }

        order.status = status;
        await order.save();

        return res.status(200).json({
            message: 'Statut de la commande modifié avec succès',
            order
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la modification du statut de la commande'
        });
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getOrderById,
    getAllOrders,
    updateOrderStatus
};


