//1. OBJETO DE CONEXION
const sequielize = require ('../config/seq')
//2.datatypes
const{DataTypes} = require('sequelize')
//const UserModel = require()

exports.getAllReviews = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : "Todos los review"
    })
}

exports.getSingleReview = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : `Single review ${req.params.id}`
    })
}

exports.createReview = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : "create review"
    })

}

exports.updateReview = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `update el review ${req.params.id}`
    })
}

exports.deleteReview = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `delete review ${req.params.id}`
    })

}

