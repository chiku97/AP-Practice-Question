const express = require('express')
const path = require('path')
const fs = require('fs')
const messageMiddleware = require('./middleware/middleware')

const app = express()
const filePath = path.join(__dirname, "data.txt")

app.use("/data/:user", messageMiddleware , (req,res) => {
    const message = fs.readFileSync(filePath,'utf-8')
    return res.status(200).json({ "message": message })
})

app.listen(3000,() => {
  console.log("Server is running on port 3000");
})
