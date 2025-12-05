const fs = require("fs");

function writeDataFile() {
    let data = 'We will not miss the exam next time'
    let file = fs.writeFileSync('./Easy 1/file.txt',data)
}
writeDataFile()