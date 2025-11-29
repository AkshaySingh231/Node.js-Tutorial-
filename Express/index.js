const http =require('http');
const express =require('express');

const app =express();

 app.get('/',(req,res)=>{
res.send("Execute Succesfully");
 });

 const server =http.createServer(app);
 server.listen(8000,()=>{
    console.log("server is starting on 8000");
 });