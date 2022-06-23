const User=require("../modles/User");

const getUserdata=('/read',(req,res,next)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
            user:result
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})



const editData=(req,res)=>{

    const data=req.body;

    console.log(data);

    User.updateOne({_id:data._id},{$set:{name:data.name,email:data.email}}).then(result=>{

        res.json({
            message:"Update Success"
        })


    }).catch(err=>{

        res.json({
            message:"Failed"
        })

    })

 


}


const deleteData=(req,res)=>{

    const id=req.params.id;
    User.deleteOne({_id:id}).then(result=>{

        res.json({
            message:"SuccessFully Deleted"
        })

    }).catch(err=>{
        res.json({
            message:"Failed"
        })

    })

}




const submit=(req,res)=>{

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        education:req.body.education,
        profile:req.body.profile

    })
    user.save().then(data=>{
        res.json({
            message:"sucess"
        })
        
    })
    

       
    
    
}


module.exports={
    getUserdata,
    editData,
    deleteData,
    submit

}