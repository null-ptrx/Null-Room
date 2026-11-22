import mongoose from 'mongoose'
import "dotenv/config"
export async function connectDb () {
    mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
} 