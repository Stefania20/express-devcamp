const {DataTypes , ValidationError} = require('sequelize')
const CoursesModel = require('../models/courses')
const sequelize = require('../config/seq')
const courses = require('../models/courses')

//objeto user
const Courses = CoursesModel(sequelize, DataTypes)

exports.getAllCourses = async (req , res)=>{
    try {
        const allCourses = await Courses.findAll()
        console.log(allCourses)
        res.status(200).json({
            "success" : true,
            "data" : allCourses
        })
        
    } catch (error) {
        res.status(422).json({
            "success":false,
            "errors":"error de servidor"

        })
        
    }
    
}

exports.getSingleCourse = async(req , res)=>{
    try {
        const getSingleCourse = await Courses.findByPk(req.params.id)
        if(!singleCourse){
            res.status(400).json({
                "success" : flase,
                "errors" : "usuario no encontrado"
               })
        }else{
            res.status(200).json({
                "success" : true,
                "data" : singleCourse
               })
        }
        
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })
    }
   
}

exports.createCourses= async (req , res)=>{
    try {
        //grabar nuevo usuario
        const newCourse = await Course.create(req.body)
        //enviar respuesta cin nuevo usuario
        res.status(201).json({
        "seccess" : true,
        "data" : newCourse
    })   
    } catch (error) {
       if (error instanceof ValidationError){
        //recorrer el  areglo de errores:
        //map
        const msg_errores=error.errors.map(errorItem=> errorItem.message )

        res.status(422).json({
            "success":false,
            "errors":msg_errores

        })
        
       }else{
        res.status(422).json({
            "success":false,
            "errors":error

        })
        
       }
    }
    
}

exports.updateCourses= async (req , res)=>{
    try {
        //seleccionar el usuario or id
        const updateCourses = await Course.findByPk(req.params.id)
        //si no existe
        if(!updateCourses){
            res.status(400).json({
                "success" : false,
                "errors" : "usuario no encontrado"
               })
        }else{
            //si existe, actualizar usuario
            await Course.update(req.body,{
                where:{
                    id: req.params.id
                }
            })
            //volvemos a seleccionar usuario
            const updateCourses = await Courses.findByPk(req.params.id)
            //response con usuario actualizaco
            res.status(200).json({
                "seccess" : true,
                "data" : updateCourses
               })

        }
        
        
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })
    }
 
}

exports.deleteCourses = async (req,res) => {
    try {
         //seleccionar el usuario or id
         const deleteCourse = await Course.findByPk(req.params.id)
         //si no existe
         if(!deleteCourse){
             res.status(400).json({
                 "success" : false,
                 "errors" : "usuario no encontrado"
                })
         }else{
             //si existe, actualizar usuario
             await Course.delete(req.body,{
                 where:{
                     id: req.params.id
                 }
             })
             //volvemos a seleccionar usuario
             const deleteCourse = await Courses.findByPk(req.params.id)
             //response con usuario actualizaco
             res.status(200).json({
                 "seccess" : true,
                 "data" : deleteCourse
                })
        }
        
    } catch (error) {
        
    }
    await Courses.destroy({
        where: {
            id: req.params.id
        }
    })
    const singleCourse = await Courses.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCourse})
}

