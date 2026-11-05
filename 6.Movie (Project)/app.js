import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB").then(() => {
    console.log("mongodb connected")
}).catch(() => {
    console.log("db error")
});

const movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    director: String
});

const movie = mongoose.model("movie", movieSchema);

app.get("/", (req, res) => {
    // res.send("Home page");
    res.json({
        msg: "Home Page"
    })
});

// Add Movie

app.post("/addmovie", async (req, res) => {
    console.log(req.body);
    const addmovie = await movie.create(req.body);
    res.json({
        msg: "movie added successfully",
        data: addmovie
    })
})

// Get All Data

app.get("/getallmovie", async (req, res) => {
    const getdata = await movie.find();

    res.json({
        msg: "All Movies",
        data: getdata
    })
})


// Get Specific data

app.get("/getmovie", async (req, res) => {
    const moviedata = await movie.findById(req.body.id);
    if (!moviedata) {
        res.json({
            msg: "movie not found"
        })
    }
    res.json({
        msg: "Movie",
        data: moviedata
    })
})


// Update specific data

app.put("/updatemovie", async (req, res) => {
    const updateMovie = await movie.findByIdAndUpdate(req.body.id, req.body.newdata);
    if (!updateMovie) {
        res.json({
            msg: "movie not found"
        })
    }
    res.json({
        msg: "Movie Update Successfully",
        data: updateMovie
    })
    console.log(req.body)
})


// delete data

app.delete("/deletemovie", async (req, res) => {
    const deleteMovie = await movie.findByIdAndDelete(req.body.id);
    if (!deleteMovie) {
        res.json({
            msg: "Movie not found"
        })
    }
    res.json({
        msg: "Movie Delete Successfully",
        data: deleteMovie
    })
})


app.listen(3000)