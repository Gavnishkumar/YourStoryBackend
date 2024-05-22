const jwt = require('jsonwebtoken');

const User =require('../Models/User')
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            // Decodes token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded Token:', decoded); // Log decoded token

            req.user = await User.findById(decoded.id).select('-Password');
            if (!req.user) {
                res.status(404);
                throw new Error('User not found');
            }

            next();
        } catch (error) {
            console.error('Error in token verification or user query:', error); // Log error
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

module.exports = protect;
