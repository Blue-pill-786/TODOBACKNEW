

const express = require("express")

const mongoose = require("mongoose");

require("dotenv").config()

const routes = require("./routes/ToDoRoutes")

const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000

//Middleware to handle cross origin Requests

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MONGO DB connected..."))
.catch((error)=>console.log(error));

app.use("/api", routes);
app.use("/",(req,res)=>{
    res.send("<h1>Welcome To My Todo App</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})
