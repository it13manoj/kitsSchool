const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const { generateToken } = require("../utils/jwt.js");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ where: { email } });

    if (!user || !user.isActive)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res.json({
      token
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // If using bcrypt hooks in the model, no need to hash here
    const user = await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: "Admin@123",
      role: "admin",
    });
     console.log(user.toJSON());

    res.status(201).json({
      message: "Successfully Created!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("User creation failed:", err);

    // Send proper error message
    res.status(500).json({
      message: "Failed to create user",
      error: err.message || err,
    });
  }
};