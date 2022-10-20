const mongoose = require('mongoose')
const url ='mongodb+srv://stefania2003:teamojb2003@cluster0.suldz4f.mongodb.net/?retryWrites=true&w=majority'

//Componente funcional
const connectDB = async ()=>{
    const conn = await mongoose.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser:true
    })
    console.log(conn.connection.host)
}


connectDB()