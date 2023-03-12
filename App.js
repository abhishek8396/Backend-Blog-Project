const express = require("express")
const app = express()
const PORT = 4000;
const bollywoodroute = require("./Rotues/Bollywood")
const hollyroutes= require("./Rotues/Hollywood")
const fitnessroutes = require("./Rotues/Fitness")
const foodroutes = require("./Rotues/Food")
const technologyroutes = require("./Rotues/Technology")
let cors=require("cors")

app.use(cors())

app.use("/",bollywoodroute)
app.use("/",hollyroutes)
app.use("/",fitnessroutes)
app.use("/",foodroutes)
app.use("/",technologyroutes)
app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})