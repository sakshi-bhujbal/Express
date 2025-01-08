const express=require("express");
const path=require("path");
const app=express();
const port=3000;

// const __filename = fileURLToPath(import.meta.url);  // Get the current file's URL
// const __dirname = dirname(__filename);  // Get the directory name from the filename
app.use(express.static(path.join(__dirname,"static")))




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,''))
});


app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
   
});

app.listen(8080,()=>{
    console.log("The server is running on port http://localhost:8080");
})