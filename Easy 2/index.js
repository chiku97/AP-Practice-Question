const express = require("express");
const app = express();

function addTimeStamp(req , res , next){
  req.timeStamp = new Date();
  next();
}
app.get("/protected", addTimeStamp ,(req, res) => {
  // TODO: Send the response: Access granted at <timestamp>
  res.send(`Access granted at ${req.timeStamp}`)
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
