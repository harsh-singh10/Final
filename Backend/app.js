const PORT = 4000

import express from "express";
const app = express();


app.get('/' ,(req,res)=>{
    res.send("Server is on")
} )

export default app 

