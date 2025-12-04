const fs = require("fs");

function writeDataFile() {
  fs.writeFileSync(
    "./Easy 1/file.txt",
    "We will not miss the exam next time",
    "utf8"
  );
}

writeDataFile();