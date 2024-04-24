import express from "express";
import connectDB from "./db/db.js";
import dotenv from "dotenv"

// dotEnv Config 
dotenv.config({
    path: "./.env"
})
// Making app 
const app = express();


import admin from './routes/admin.route.js'

app.use('/admin' , admin )



app.get('/' , (req,res)=>{
  res.send("I am server ")
})




app.listen(process.env.PORT,()=>{
  console.log(`your server is listning on port ${process.env.PORT}`);
  connectDB()
})