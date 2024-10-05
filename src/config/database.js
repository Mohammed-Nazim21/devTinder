const mongoose = require("mongoose");

const connectDB = async () => {
  // since mongoose.connect returns a promise, we are handling it by wrapping the function in asycn await
  await mongoose.connect(
    "mongodb+srv://nazimshaikh405:x8CGo5DQYjXYh8xj@namastenode.e1lvu.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
