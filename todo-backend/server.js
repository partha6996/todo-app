const express = require("express")
const cors = require("cors")
const bodyParser = require("bodyParser")
const mongoose = require("mongoose")

const app = express();
app.use(cors())
app.use(bodyParser,json())
app.use(express.json())

const connectDB = async () =>{
    try{
        mongoose.connect("mongodb+srv://root:root@todoappdb.vgtuw.mongodb.net/?retryWrites=true&w=majority&appName=todoAppDB")
        console.log("Mongo DB connected")
    } catch(error){
        console.error("Mongo DB connection failed", error)
    }
}


app.post("/",(req,res)=>{
    const { title } = req.body;
    console.log("Add a new todo", title)
    res.status(200).json({messge:"Hello from express server"})

})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log('Server is runnin on the port ${PORT}')

})