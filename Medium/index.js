const fs = require('fs')
const express = require('express');
const { roleBasedAccess } = require('./middleware');
const app = express();

app.get('/data/:user', roleBasedAccess, (req, res) => {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    res.status(200).json({
        "message": data
    })
});

app.listen(3000, () => {
    console.log("server is listeing on port 3000");
})