const {DataTypes , ValidationError} = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')

//objeto user
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async (req , res)=>{
    try {
        const allUsers = await User.findAll()
        console.log(allUsers)
        res.status(200).json({
            "success" : true,
            "data" : allUsers
        })
        
    } catch (error) {
        res.status(422).json({
            "success":false,
            "errors":"error de servidor"

        })
        
    }
    
}

exports.getSingleUser = async(req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(!singleUser){
            res.status(400).json({
                "success" : flase,
                "errors" : "usuario no encontrado"
               })
        }else{
            res.status(200).json({
                "success" : true,
                "data" : singleUser
               })
        }
        
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })
    }
   
}

exports.createUser= async (req , res)=>{
    try {
        //grabar nuevo usuario
        const newUser = await User.create(req.body)
        //enviar respuesta cin nuevo usuario
        res.status(201).json({
        "seccess" : true,
        "data" : newUser
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
            "errors":"error de servidor"

        })
        
       }
    }
    
}

exports.updateUser= async (req , res)=>{
    try {
        //seleccionar el usuario or id
        const updateUser = await User.findByPk(req.params.id)
        //si no existe
        if(!updateUser){
            res.status(400).json({
                "success" : false,
                "errors" : "usuario no encontrado"
               })
        }else{
            //si existe, actualizar usuario
            await User.update(req.body,{
                where:{
                    id: req.params.id
                }
            })
            //volvemos a seleccionar usuario
            const updateUser = await User.findByPk(req.params.id)
            //response con usuario actualizaco
            res.status(200).json({
                "seccess" : true,
                "data" : updateUser
               })

        }
        
        
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })
    }
 
}

exports.deleteUser = async (req,res) => {
    try {
         //seleccionar el usuario or id
         const deleteUser = await User.findByPk(req.params.id)
         //si no existe
         if(!deleteUser){
             res.status(400).json({
                 "success" : false,
                 "errors" : "usuario no encontrado"
                })
         }else{
             //si existe, actualizar usuario
             await User.delete(req.body,{
                 where:{
                     id: req.params.id
                 }
             })
             //volvemos a seleccionar usuario
             const deleteUser = await User.findByPk(req.params.id)
             //response con usuario actualizaco
             res.status(200).json({
                 "seccess" : true,
                 "data" : deleteUser
                })
        }
        
    } catch (error) {
        
    }
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    const singleUser = await User.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleUser})
}

