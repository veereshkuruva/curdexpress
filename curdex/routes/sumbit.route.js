const express=require("express");
const { submit } = require("../controllers/user.controller");
const authrouter=express.Router();


authrouter.get("/healthecheck",(req,res)=>{
    res.send("sucessFullyworking")
});


authrouter.post("/submit",submit);


module.exports=authrouter;