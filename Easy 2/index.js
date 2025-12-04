const express = require("express");
const timestamp = require("./middlewares/middleware");
const app = express();

app.get("/protected", timestamp, (req, res) => {
  // TODO: Send the response: Access granted at <timestamp>
  const timestamp = req.timestamp
  console.log(timestamp)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
