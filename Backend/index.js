import express from "express";

import connectDB from "./db/db.js";
import dotenv from "dotenv"



dotenv.config({
    path: "./.env"
})


const app = express();

// // Connect to MongoDB
// connectDB()
//   .then(() => {
 
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is listening on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection failed:", err);
//   });




app.listen(process.env.PORT,()=>{
  console.log(`your server is listning on port ${process.env.PORT}`);
  connectDB()
})