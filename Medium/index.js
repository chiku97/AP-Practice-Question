const express = require("Express");
const fs = require("fs");
const path = require("path");
const checkAccess = require("./middleware.js");
const app = express();
app.get("/data/:user",checkAccess, (req,res) => {
    const filePath = path.join(__dirname,"data.txt");
    const content = fs.readFileSync(filePath,"utf-8");
    res.status(200).json({message: content});
});

app.listen(3000,()=>{
    console.log("Server Running on 3000");
})
