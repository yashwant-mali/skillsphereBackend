const db = require('../config/dbConfig');

exports.getAllImgages = async () => {
    const [images] = await db.query('select * from images');
    return images;
}

exports.createSkill = async (ImagePath, Name, ImageType) => {
    const sql = 'INSERT INTO images (ImagePath, Name, ImageType) VALUES (?, ?, ?)';
    try {
        await db.query(sql, [ImagePath, Name, ImageType]);
        console.log('Insert successful');
    } catch (err) {
        console.error('Error during insert:', err);
        throw err; // rethrow to be caught in controller
    }
};


