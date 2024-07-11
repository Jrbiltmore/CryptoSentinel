const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Secret key for JWT signing and encryption
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

// Generate a JWT token for a user
function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
}

// Hash the user's password before saving to the database
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// Compare the provided password with the stored hashed password
async function comparePassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
};
