require('dotenv').config();
const mysql = require('mysql2/promise');

// Create the pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Don't forget port!
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Optional: Test connection once
(async () => {
    try {
        const connection = await db.getConnection();
        console.log('✅ Connected to Railway MySQL DB!');
        connection.release(); // Always release back to pool
    } catch (err) {
        console.error('❌ Connection failed:', err);
    }
})();

module.exports = db;
