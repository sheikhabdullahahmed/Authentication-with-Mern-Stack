const mongoose = require("../config/dbCongif")


const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    role: {typeof: String, enum: ["admin", "customer"], default: "customer"}
})

module.export = mongoose.module("user", userSchema)