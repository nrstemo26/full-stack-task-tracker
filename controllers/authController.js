const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//

//so what do we need to do here.
//create users login the user which makes sure they can add
//get me just returns the user info


//logs them in too
const registerUser = asyncHandler( async (req,res) =>{
    const { name, email, password } = req.body;
    if(!name|| !email || !password){
        res.status(400)
        throw new Error('please fill out all fields')
    }
    //check if email is already used
    const userExists = await User.findOne({email: email})

    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    //encrypts passowrd
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt) 

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(!user){
        res.status(400).send('error creating user')
        throw new Error('error creating user')
    }else{
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
})

const getMe = asyncHandler( async (req,res) => {    
    //route is protected so the user will be 
    //added to the req if it is authorized with jwt
    res.status(200).json(req.user)
})

const loginUser = asyncHandler( async (req,res) =>{
    const {email, password} = req.body;

    const user = await User.findOne({email:email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id  : user.id,
            name : user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error('invalid credentials')
    }
})


const generateToken = (id)=>{
    return jwt.sign({ id}, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    getMe,
    loginUser,
}