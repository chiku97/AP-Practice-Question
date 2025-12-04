// **Problem Statement**

// Your task is to complete the code inside the `./index.js` file by creating a middleware named **`addTimestamp`**.

// ---

// ### The middleware should:

// - Add a new key `timestamp` to the `req` object and store the current date and time using `new Date()`.
// - Call the `next()` function to pass control to the next middleware or route handler.

// ---

// ### Task Requirements:

// - Apply this middleware **only** to the `/protected` route.
// - Modify the `/protected` route to send the following response:

// ```
// Access granted at <timestamp>
// ```

// where `<timestamp>` is the value stored in `req.timestamp`.

// ---

// ##  Example

// ### Request:
// GET http://localhost:3000/protected


// **Successful Response (Date and time will vary):**

// Access granted at Tue Nov 11 2025 10:45:23 GMT+0530 (India Standard Time)

const express = require("express");
const app = express();



const addTimestamp = (req,res,next) => {
  req.timestamp = new Date();
  next();
}
app.get("/protected", addTimestamp, (req, res) => {
  // TODO: Send the response: Access granted at <timestamp>
  res.send(`Access granted at ${req.timestamp}`);
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
