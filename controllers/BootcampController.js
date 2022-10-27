//1. OBJETO DE CONEXION
const sequielize = require ('../config/seq')
//2.datatypes
const{DataTypes} = require('sequelize')
//const UserModel = require()

exports.getAllBootcamps = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : "Todos los bootcamps"
    })
}

exports.getSingleBootcamp = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : `Single bootcamp ${req.params.id}`
    })
}

exports.createBootcamp = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : "create bootcamp"
    })

}

exports.updateBootcamp = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `update el bootcamp ${req.params.id}`
    })
}

exports.deleteBootcamp = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `delete bootcamp ${req.params.id}`
    })

}

