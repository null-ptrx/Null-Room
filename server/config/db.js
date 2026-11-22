import mongoose from 'mongoose'
import {dotenv} from "dotenv"
export async function connectdb () {
    mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
} 