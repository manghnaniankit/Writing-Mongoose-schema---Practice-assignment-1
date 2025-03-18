const express = require("express");
const mongoose = require("mongoose");
const User = require("./schema"); // Importing the User model

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/user_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Sample API Route to Create a User
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});