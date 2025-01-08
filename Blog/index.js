const express=require("express");
const path=require("path")

const app=express();
const port=3000

// app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'Routes/blog.js')));

app.listen(port,()=>{
    console.log("The server is running on port http://localhost:3000");
})