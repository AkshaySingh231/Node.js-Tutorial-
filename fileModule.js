const fs =require('fs');

//Sync
const Wf=fs.writeFileSync('test.txt',"This is my file Now let's Start ");
console.log("Wrirtten Successfully");

//Async
// fs.writeFile('./test.txt',"This is my another updated ",(err)=>{
//      if (err){
//         console.log("eror");
//      }
//      else{
//         console.log("updated");
//      }
// });

// //ASynchronous Code Read
// fs.readFile('./test.txt','utf-8',(err,data)=>{
//     if (err){
//         console.log("Some Thing Wrong");
//     }
//     else{
//         console.log("data Print",data);
//     }
// });

//Synchronous Code -> Blocking Code
const data =fs.readFileSync('./test.txt','utf-8');
console.log(data);

// Async delete

// fs.unlink('./test.txt',(err)=>{
//     if(err){
//         console.log("SomeThing went wrong");
//     }
//     else{
//         console.log("fileDeleted successfully");
//     }
// });

//Sync Deleted

// const result  =fs.unlinkSync('./test.txt',"file Deleted.");
// console.log("file Deleted Successfully");


// Crete a folder

fs.mkdir('New folder',(err)=>{
    if(err){
        console.log("SomeThing went wrong");
    }
    else{
        console.log("Folder Created Successfully"); 
    }
})

fs.rmdirSync('New folder');