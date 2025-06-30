const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/User"); // Use the User model

router.post('/register', async function (req, res) {
    const { email, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ message: "User already exists!" });

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered!" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/login', async function (req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !user.password) {
            return res.status(400).json({ message: "User does not exist or password missing!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router;