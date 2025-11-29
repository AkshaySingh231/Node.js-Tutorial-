const http =require('http');
const fs =require('fs');

const server =http.createServer((req,res)=>{
    const log =`${new Date().toDateString()} ${new Date().toLocaleTimeString()} : Log saved! \n`;
    //  fs.appendFile('./text.txt',log,(err)=>{
    //     if(err){
    //         console.log("Something went Wrong");
    //     }
    //     else{
    //         console.log("Appended Succesfully");
    //     }
    //  })
    fs.appendFileSync('./text.txt',log)
    console.log("Logged Successfully");
    
        res.end("Hello ,server with logging");
   
});

server.listen(4000,()=>{
    console.log(`Server  is running SuccuessFully : ${4000}`);
})
