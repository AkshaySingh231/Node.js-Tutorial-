const express =require("express");
const things=require('./things.js');

const app =express();

app.get("/hello",(req,res)=>{
    res.send("Working fine");
});

app.use('/things',things);

app.listen(4000,() =>{
    console.log("Server is running on port 4000");
})