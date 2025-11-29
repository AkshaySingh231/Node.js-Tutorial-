const http =require('http');
const port =3000;
const server =http.createServer((req,res)=>{
    // res.statusCode=200;
    // res.setHeader("Content-Type" ,"text/plain");
    // res.writeHead(404,{'Content-Type' :'text/html'});
    // // res.end(JSON.stringify({message:"Welcome My dear"}));
    // res.end("<h1>404 Not Found</h1>")
    

    if (req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcome to the Home Page");
    }
    else if (req.url === '/about'){
        res.end("this is all about me ,Thank you !");
    }
    else{
        res.end("shut Down");
    }

})

server.listen(port,()=>{
    console.log(`Server is running smoothly on port ${port} .`);
});
