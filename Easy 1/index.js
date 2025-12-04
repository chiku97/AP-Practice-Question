const fs = require("fs");
const path = require("path");

function writeDataFile() {
  const filePath = path.join(__dirname, "file.txt");
  const content = "We will not miss the exam next time";

  fs.writeFileSync(filePath, content);
}

module.exports = writeDataFile;