const bcrypt = require('bcrypt');
const RegisterModel = require('../models/registerModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await RegisterModel.getAllUsers();
        res.json(users);
    } catch {
        res.status(500).json({ error: "facing error to fetch registered users data" });
    }
}

exports.createUser = async (req, res) => {
    const { name, email, dob, gender, country, password, created_at } = req.body;
    const users = await RegisterModel.getAllUsers();


    console.log(req.body);
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    } else if (
        users.find((e) => e.email === email)
    ) {
        return res.status(400).json({ error: "Email id is already registered with us" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await RegisterModel.createUser(name, email, dob, gender, country, hashedPassword, created_at);
        res.json({ message: "User created" });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error in creating user');
    }
};