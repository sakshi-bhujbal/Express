import express from 'express';
const app = express();




//app.method(PATH,HANDLER)
app.get('/', (req, res,next) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("Hello! Welcome to Express ");
    next()
    
},(req,res,next)=>{
    res.write("Let's Get Started");
    res.end()
}
);
app.get('/about',(req,res)=>{
    res.write("Welcome to Homepage");
    res.end();
})
// app.post('/',(req,res)=>{
//     res.send("POST request to the homepage");
// })

app.listen(8080, () => {
    console.log("The server is running on port: http://localhost:8080");
})
