const sequelize = require ('./seq')
const clors = require('colors')


//funcion para conectarme a la db
const connectDB =async ()=>{
    try {
     await sequelize.authenticate()   
        console.log('Conectado al servidor mysql'.bgCyan)
        //crear un usuario
       /* const jane = await User.create({ username: "Ana", email: "ana@hmail.com", password:"123458"});
        console.log("Jane's auto-generated ID:", jane.id);
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        await User.update({  username: "Ana"}, {
            where: {
              userame: "LINA"
            }
          });*/
    } catch (error) {
        console.log('error')
    }
    
}

module.exports = connectDB