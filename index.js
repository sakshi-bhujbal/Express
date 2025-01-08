import express from 'express';
const app=express();
import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);  // Get the current file's URL
const __dirname = dirname(__filename);  // Get the directory name from the filename
app.use(express.static(path.join(__dirname,"public")))




app.get('/first/:name',(req,res)=>{
    res.send("First Page" + " "+req.params.name)
});


app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
   
});

app.listen(8080,()=>{
    console.log("The server is running on port http://localhost:8080");
})