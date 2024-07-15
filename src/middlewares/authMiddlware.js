const jwt = require('jsonwebtoken');
const Admission = require('../models/Admission')
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
};

const verifyAdmissionOwnership = async (req, res, next) => {
    try {
        const admission = await Admission.findById(req.params.id);
        if (!admission) {
            return res.status(404).json({ error: 'Admission not found!' });
        }

        if (req.user.role === 'ROLE_ADMIN') {
            return next();
        }

        if (admission.userId.toString() === req.user.userId) {
            return next();
        }

        return res.status(403).json({ error: 'Access denied! You are not the owner of this admission' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    verifyToken,
    verifyRole,
    verifyAdmissionOwnership,
}