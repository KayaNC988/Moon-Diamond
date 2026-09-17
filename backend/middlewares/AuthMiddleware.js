const jwt = require('jsonwebtoken');

// Vérifie que l'utilisateur est connecté
exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            error: 'Token manquant ou invalide'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Token invalide ou expiré'
        });
    }
};

// Vérifie que l'utilisateur est un administrateur
exports.isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
            error: 'Accès refusé. Vous devez être administrateur.'
        });
    }
    next();
};

