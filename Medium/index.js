const express = require("express");
const app = express();
const fs = require('fs')
const {check} = require('./middleware.js')

app.get("/data/:user", check, (req, res) => {
  
    fs.readFile('./data.txt', "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Error reading file" });
      }
  
      res.status(200).json({ message: data });
    });
  });

app.listen(3000,(req,res)=>{
    console.log("server listening on 3000")
})