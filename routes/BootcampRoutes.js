const express = require('express')
const router = express.Router()

//  rutas para bootcamps
//listar todos los bootcamps
router.get('/' , (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : "Aqui se van a mostrar todos los bootcamps"
    })
})

//listar un bootcamp por id
router.get('/:id', (req , res)=>{
    res.status(200).json({
        "succes" : true,
        "data" : `Aqui se va a mostrar el bootcamp cuyo id es ${req.params.id}`
    })
})

//crear un nuevo bootcamp
router.post('/' , (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : "Aqui se van a crear un bootcamp"
    })

})
   
//actualizar un bootcamp por id
router.put('/:id' , (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `Aqui se va actualizar el bootcamp cuyo id es ${req.params.id}`
    })
})

//borrar un bootcamp por id
router.delete('/:id' , (req , res)=>{
    res.status(201).json({
        "succes" : true,
        "data" : `Aqui se va borrar el bootcamp cuyo id es ${req.params.id}`
    })

})


module.exports = router
