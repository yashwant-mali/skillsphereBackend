const db = require('../config/dbConfig');

exports.getAllUsers = async () => {
    const [users] = await db.query('SELECT * FROM register');
    return users;
};

exports.createUser = async (name, email, dob, gender, country, password, created_at) => {

    const sql = 'INSERT INTO register (name, email, dob, gender, country, password, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';

    try {
        await db.query(sql, [name, email, dob, gender, country, password, created_at]);
        console.log('Insert successful');
    } catch (err) {
        console.error('Error during insert:', err);
        throw err; // rethrow to be caught in controller
    }
};
