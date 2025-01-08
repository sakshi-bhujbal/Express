import express from 'express';
const app = express();

//app.method(PATH,HANDLER)
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("Hello! Welcome to Express ");
    res.end();
});

app.listen(8080, () => {
    console.log("The server is running on port: http://localhost:8080");
})
