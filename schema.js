const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],  // Array of strings (e.g., ['user', 'admin'])
    default: ["user"] // Default role is "user"
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number }
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
});

// Export the Model
const User = mongoose.model("User", userSchema);
module.exports = User;