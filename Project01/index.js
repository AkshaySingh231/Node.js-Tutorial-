const express =require('express');
const users = require('./MOCK_DATA (1).json');
const app =express();
const port =3000;
app.get('/api/users',(req,res)=>{
    return res.json(users);
});

app.get('/users',(req,res)=>{
    const html =`
    <ul>
    ${users.map(user=> `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.end(html);
});

// Get a particular user details
app.get('/users/:id' ,(req,res)=>{
    const id =Number(req.params.id);
    const user =users.find((user) => user.id === id);
    return res.json(user);
});

// Create a new user


app.listen(port,()=>{
    console.log(`Server is running on ${port} port .`);
});