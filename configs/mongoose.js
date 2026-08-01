const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Database:12345@cluster0.i1nr5bb.mongodb.net/Hisab-Kitab?appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to Khatabook database");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
  
module.exports = mongoose.connection;