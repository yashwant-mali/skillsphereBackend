const teachersModel = require('../models/teachersModel');

exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await teachersModel.getAllTeachers();
        res.json(teachers);
    } catch {
        res.status(500).json({ error: "error in fetching the teachers" });
    }
};

exports.createTeacher = async (req, res) => {
    try {
        const { Institute, Address, Country, PeriodInMonths, Fees, Rating, SkillName } = req.body;

        // Validate required fields
        if (!Institute || !Address || !Country || !SkillName) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        await teachersModel.createTeacher(Institute, Address, Country, PeriodInMonths, Fees, Rating, SkillName);
        res.status(201).json({ message: 'Teacher created successfully' });
    } catch (error) {
        console.error('Error in POST /teachers:', error.message);
        res.status(500).json({ error: 'Internal server error' }); // 🟢 Send JSON!
    }
};