const express = require("express");

const { adminAuth, userAuth } = require("./middleware/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getData", (req, res) => {
  console.log("Data Sent");
  res.send("Data successully Sent");
});

app.get("/admin/deleteData", (req, res) => {
  console.log("Data Deleted");
  res.send("Data successfully Deleted");
});

app.use("/user", userAuth);

app.get("/user/getData", (req, res, next) => {
  console.log("User data successfully fetched");
  res.send("Sending Ussr Data");
});

app.get("/user/deleteData", (req, res, next) => {
  console.log("User data Deleted");
  res.send("User Deleted");
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777");
});
