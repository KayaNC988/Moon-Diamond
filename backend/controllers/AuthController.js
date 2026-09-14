const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Inscription d'un nouvel utilisateur
exports.register = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Vérification des champs obligatoires
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({
                error: 'Tous les champs sont obligatoires'
            });
        }

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.status(409).json({
                error: 'Un compte existe déjà avec cette adresse email'
            });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création de l'utilisateur
        const user = await User.create({
            firstname,
            lastname,
            email,
            password_hash: hashedPassword,
            role: 'customer'
        });

        return res.status(201).json({
            message: 'Compte créé avec succès',
            user: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la création du compte'
        });
    }
};


// Connexion d'un utilisateur
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: 'Email et mot de passe obligatoires'
            });
        }

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                error: 'Email ou mot de passe incorrect'
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Email ou mot de passe incorrect'
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '2h'
            }
        );

        return res.status(200).json({
            message: 'Connexion réussie',
            token,
            user: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erreur lors de la connexion'
        });
    }
};