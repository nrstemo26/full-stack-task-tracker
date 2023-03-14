const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = asyncHandler( async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(400)
        throw new Error('where the token at? ')
    }

    try{
        token = authHeader.split(' ')[1]; //gets token from the header
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password') 
        next();
    }catch(e){
        throw new Error('not authorized for this')
    }
})

module.exports = { protect };