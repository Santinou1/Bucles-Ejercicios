const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    email:String,
    age: Number,
    colorFav:String
})

const User = mongoose.model("User", userSchema)

module.exports = User