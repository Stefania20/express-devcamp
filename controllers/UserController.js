const {DataTypes} = require ('sequelize')
const UserModel = require ('../models/user')
const sequelize = require ('../config/seq')

//objeto user
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async(req , res)=>{
    const allUsers = await User.findAll()
    res.status(200).json({
        "succes" : true,
        "data" : allUsers
    })
}

exports.getSingleUser = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : `Single users ${req.params.id}`
    })
}

exports.createUser = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : "create users"
    })

}

exports.updateUser = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `update el users ${req.params.id}`
    })
}

exports.deleteUser = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `delete users ${req.params.id}`
    })

}

