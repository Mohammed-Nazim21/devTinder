const express = require("express");

const { adminAuth, userAuth } = require("./middleware/auth");

const app = express();

app.get("/user/getData", (req, res, next) => {
  try {
    // Logic of DB call and get user data
    throw new Error("klgahd;g");
    res.send("Sending Ussr Data");
  } catch (err) {
    res.status(500).send("Some thing went wrong. Contact Support");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log the error message
    res.status(500).send("Something Went Wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777");
});
