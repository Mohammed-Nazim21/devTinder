const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

// GET user by email
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const users = await User.find({ emailId: userEmail });
//     if (users.length === 0) {
//       res.status(404).send("User not Found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something Went Wrong");
//   }
// });

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not Found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});

// app.get("/user", async (req, res) => {
//   const userId = req.body.id;
//   console.log(userId);
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       res.status(404).send("User not Found");
//     } else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Something Went Wrong");
//   }
// });

// Feed API - GET/feed - get all users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).send("No Users Found.");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Delete user from database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User Deleted");
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});

// Update data of the user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  // const userEmaiId = req.body.emailId;
  const data = req.body;
  try {
    // const user = await User.findByIdAndUpdate(userId, data, {
    //   returnDocument: "after",
    // });
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    // const user = await User.findOneAndUpdate({ emailId: userEmaiId }, data);
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log(err);
    console.error("Database cannot be connected!!");
  });
