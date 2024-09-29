const express = require("express");

const app = express(); // creating a express app. This is a instance of express. We have create a web server

// request handler
// app.use("/", (req, res) => {
//   res.send("Hello! Welcome to Dashboard");
// });

app.use("/test", (req, res) => {
  res.send("Hello from server made using express");
});

app.use("/denji", (req, res) => {
  res.send("Hello from Chainsaw Man, it is me Denji");
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777");
});
