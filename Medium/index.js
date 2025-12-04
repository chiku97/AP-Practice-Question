const express = require("express");
const fs = require("fs");
const path = require("path");
const checkAccess = require("./middleware");

const app = express();

app.get("/data/:user", checkAccess, (req, res) => {
  const filePath = path.join(__dirname, "data.txt");

  const content = fs.readFileSync(filePath, "utf-8");

  res.status(200).json({
    message: content
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});