import express from "express";
import accessCheck from "./middleware.js";
import fs from "fs";
const app = express();
const PORT = 8000

app.get("/data/:user", accessCheck, (req, res) => {
    try {
        fs.readFile("./data.txt", 'utf-8' , (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal Server Error" })
            }
            return res.status(200).json({ message: data })
        })
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error ${err.message}` })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})