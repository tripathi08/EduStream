import mongoose from "mongoose";

export const connectDB=async()=>{
 const {connection}=await mongoose.connect("mongodb://127.0.0.1/edustream");

 console.log(`MongoDB connected with ${connection.host}`)
}