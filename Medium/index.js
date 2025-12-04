const express = require('express');
const app = express();
const fs = require('fs').promises;
app.use(express.json());
const Middleware = require('./middleware');


app.get('/data/:user',Middleware, async (req, res) => {
    let data = await fs.readFile('data.txt', 'utf-8');
    res.status(200).json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});