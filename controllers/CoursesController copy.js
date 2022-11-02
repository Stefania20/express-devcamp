//1. OBJETO DE CONEXION
const sequielize = require ('../config/seq')
//2.datatypes
const{DataTypes} = require('sequelize')
//const UserModel = require()

exports.getAllCourses = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : "Todos los courses"
    })
}

exports.getSingleCourse = (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : `Single course ${req.params.id}`
    })
}

exports.createCourses = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : "create course"
    })

}

exports.updateCourses = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `update el course ${req.params.id}`
    })
}

exports.deleteCourses = (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `delete course ${req.params.id}`
    })

}

