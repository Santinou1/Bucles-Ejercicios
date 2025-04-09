const mongoose = require("mongoose")

const url = "mongodb://localhost:27017/miBaseDeDatos"

const connectDb= async () =>{
    try{
        await mongoose.connect(url)
        console.log("Conectado a mongo")
    }
    catch(error){
        console.error("ERROR A MONGO "+ error)
    }
}

 module.exports= connectDb