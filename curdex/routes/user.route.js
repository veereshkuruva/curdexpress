const express=require("express");
const userrouter=express.Router();
const {getUserdata,editData,deleteData}=require("../controllers/user.controller");


userrouter.get("/read",getUserdata)



userrouter.put("/edit/:id",editData);



userrouter.delete("/delete/:id",deleteData);




module.exports=userrouter;