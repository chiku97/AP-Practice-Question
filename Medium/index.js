
const express = require("express")
const fs = require("fs")
const path = require("path")
const checkPerm = require("./middleware")

const app = express()
const PORT = 3000
app.get("/data/:user", checkPerm, (req, res) => {
  const filePath = path.join(__dirname, "data.txt")
  try {
    const data = fs.readFileSync(filePath, "utf-8")
    return res.status(200).json({ message: data })
  } catch (error) {
    return res.status(500).json({ message: "Error reading file" })
  }
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
