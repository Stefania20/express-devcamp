//1. Crear a dependencia a express
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require ('./config/db')
const listEndpoints = require('express-list-endpoints')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')
const userRoutes = require('./routes/UserRoutes')

//definiendo archiv .ev
dotenv.config({
    path: './config/config.env'
})
//2. Crear el objeto app con express
const app = express()

//conectar a db
connectDB()

// relacionar rutas de dominio
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , coursesRoutes)
app.use('/api/v1/users' , userRoutes)

//primera ruta de prueba
app.get('/' ,( request , response )=>{
    response.send('ruta funcionando')                   
})

//consultar endpoints del proyecto
console.log(listEndpoints(app))

//3. Iniciar el servidor de dearrollo
app.listen(process.env.PORT ,()=>{
    console.log('servidor iniciado'.bgWhite.blue)
})