const express =require("express");
const router =express.Router();

router.get('/', function(req,res){
    res.send("Get all the things");
});

router.post('/hello',(req,res)=>{
    res.send("Create a new thing");
});

router.put('/',(req,res)=>{
    res.send("Update the thing");
})

module.exports =router;