const fs = require("fs").promises;
const path = require("path");

async function writeDataFile() {
    const data = await fs.writeFile( path.join(__dirname, "file.txt") , "We will not miss the exam next time");
    console.log("File written successfully");


}
writeDataFile().then(() => {
    console.log("Operation completed");
}).catch((err) => {
    console.error("Error writing file:", err);
});