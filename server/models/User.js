import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    emial : String,
    passwordHash : String,

}, {
    timestamps : true
})

export default mongoose.model('User', userSchema);