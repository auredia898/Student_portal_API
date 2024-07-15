const jwt = require('jsonwebtoken');
const Article = require('../models/index')
require('dotenv').config();

const verifyToken = (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) return res.status(403).json({ error: 'Access denied!' });

    try {
        const bearerToken = token.split(' ')[1];
        const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};


const verifyRole = (roles)=> {
    return(req, res, next)=> {
        if(!roles.includes(req.user.role)){
            console.log('Access denied!');
            return res.status(403).json({error: 'Access denied!'})
        }
        next();
    }
}

module.exports = {
    verifyToken,
    verifyRole,
}