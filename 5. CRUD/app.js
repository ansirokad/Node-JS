import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect ("mongodb://localhost:27017/studentDemo").then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("DB Error");
});

const studentScheme = mongoose.Schema({
   firstname : String,
    age : Number
})

const student = mongoose.model("student",studentScheme);

app.get("/",async(request,response)=>{
    const students = await student.find();
    response.json({
        msg : "Home Page",
        data :students
    });
})

app.listen(3000);