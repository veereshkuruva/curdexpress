const express=require("express");
const app=express();
const cors=require("cors");
const userrouter=require("./routes/user.routes.js");
const { submit } = require("./controllers/user.controller");

app.use(express.json());

app.use(cors());

app.post("/submit",submit)

app.use("/user",userrouter)  


module.exports=app;