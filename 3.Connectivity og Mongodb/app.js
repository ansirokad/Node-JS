const express = require ("express");
const mongoose = require("mongoose")

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/demo").then(()=>{
    console.log("Database connected successfully")
}).catch(()=>{
    console.log("server error");
})


app.get("/",(request,response)=>{
    response.send("Home Page")
})

app.listen(3000)