const fs = require("fs");
const path = require('path');
function writeDataFile() {
    fs.writeFileSync(path.join(__dirname , 'file.txt') , 'We will not miss the exam next time')
}


writeDataFile();