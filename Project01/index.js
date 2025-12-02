const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA (1).json');
const app = express();
const port = 3000;
// Parse JSON bodies
//Middle ware
// Parse URL-encoded bodies (HTML form submissions)
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).put((req, res) => {
    res.json({ status: "pending" });
}).delete((req, res) => {
    res.json({ status: "pending" });
});



app.post('/api/users', (req, res) => {
    const body = req.body;

    // Push new user
    users.push({ ...body, id: users.length + 1 });

    // Write to file
    fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Something went wrong while saving the file");
        }

        return res.json({ status: "Success", id: users.length });
    });
});


app.listen(port, () => {
    console.log(`Server is running on ${port} port .`);
});