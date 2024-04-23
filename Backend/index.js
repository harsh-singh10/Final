import express from "express";

import connectDB from "./db/db.js";
import dotenv from "dotenv"

import app from "./app.js"; 

dotenv.config({
    path: "./.env"
})




// Connect to MongoDB
connectDB()
  .then(() => {
 
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

