// ES5 Methode

const express = require("express");

const app = express();

app.get("/",function(request,response){
    response.send("welcome! Home page");
});

app.get("/about",function(request,response){
    response.send("About page");
});

app.listen(3000);   