const db = require('../config/dbConfig');

exports.getAllTeachers = async () => {
    const [teachers] = await db.query('select * from teachers');
    return teachers;
}

exports.createTeacher = async (Institute, Address, Country, PeriodInMonths, Fees, Rating, SkillName) => {
    const sql = 'INSERT INTO teachers (Institute, Address, Country, PeriodInMonths, Fees, Rating, SkillName) VALUES (?, ?, ?, ?, ?, ?, ?)';
    try {
        await db.query(sql, [Institute, Address, Country, PeriodInMonths, Fees, Rating, SkillName]);
        console.log('record inserted successfully');
    } catch (err) {
        console.log('error to add data', err);
        throw err;
    }
};