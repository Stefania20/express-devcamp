const express = require('express')
const router = express.Router()

//  rutas para courses
//listar todos los courses
router.get('/' , (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : "Aqui se van a mostrar todos los courses"
    })
})

//listar un courses por id
router.get('/:id', (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : `Aqui se va a mostrar el courses cuyo id es ${req.params.id}`
    })
})

//crear un nuevo courses
router.post('/' , (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : "Aqui se van a crear un courses"
    })

})
   
//actualizar un courses por id
router.put('/:id' , (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `Aqui se va actualizar el courses cuyo id es ${req.params.id}`
    })
})

//borrar un courses por id
router.delete('/:id' , (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `Aqui se va borrar el courses cuyo id es ${req.params.id}`
    })

})

module.exports = router