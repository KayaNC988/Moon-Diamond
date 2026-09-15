require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');
const productRoutes = require('./routes/ProductRoutes');
const authRoutes = require('./routes/AuthRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');
const orderRoutes = require('./routes/OrderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
    res.json({
        message: 'API Moon Diamond opérationnelle 💎'
    });
});

// Routes produits
app.use('/api/products', productRoutes);

// Routes d'authentification
app.use('/api/auth', authRoutes);

// Routes de catégories
app.use('/api/categories', categoryRoutes);

// Routes de commandes
app.use('/api/orders', orderRoutes);

// Connexion à la base de données puis démarrage du serveur
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données MySQL réussie');

        app.listen(PORT, () => {
            console.log(`Serveur Moon Diamond démarré sur le port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(
            'Erreur de connexion à la base de données MySQL :',
            error
        );
    });