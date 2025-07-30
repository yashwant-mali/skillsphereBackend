const imagesModel = require('../models/ImagesModel');

exports.getAllImages = async (req, res) => {
    try {
        const images = await imagesModel.getAllImgages();
        res.json(images);
    } catch {
        res.status(500).json({ error: 'facing error to fetch the images' });
    }
};



exports.createSkill = async (req, res) => {
    try {
        const { ImagePath, Name, ImageType } = req.body;
        // Validate required fields
        if (!ImagePath || !Name || !ImageType) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        await imagesModel.createSkill(ImagePath, Name, ImageType);
        res.status(201).json({ message: 'Teacher created successfully' });
    } catch (error) {
        console.error('Error in POST /teachers:', error.message);
        res.status(500).json({ error: 'Internal server error' }); // 🟢 Send JSON!
    }
};