require("dotenv").config();
const app=require("./app");
const port=process.env.PORT  || 5050
const dbConnect=require("./db");

dbConnect(process.env.uri).then(()=>{
    app.listen(port,()=>{
        console.log(`db connected  server is running ${port}`)
    })
}).catch(err=>{
    console.log(err)
})

