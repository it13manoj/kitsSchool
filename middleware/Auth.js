const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY // Use a strong key in real apps

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;  // Attach user data to req.user
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }
};

module.exports = auth;
