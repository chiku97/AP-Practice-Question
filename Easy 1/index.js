const fs = require("fs");
const path = require('path')

const filePath = path.join(__dirname,"file.txt")

function writeDataFile() {
    return fs.appendFileSync(filePath,"We will not miss the exam next time")
}
writeDataFile()