const express = require("express");
const fs = require("fs");
const path = require("path");
const checkAccess = require("./middleware");

const app = express();

app.get("/data/:user", checkAccess, (req, res) => {
  const filePath = path.join(__dirname, "data.txt");

  try {
    const content = fs.readFileSync(filePath, "utf-8");

    return res.status(200).json({ message: content });

  } catch (error) {
    return res.status(500).json({ message: "Error reading file" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});