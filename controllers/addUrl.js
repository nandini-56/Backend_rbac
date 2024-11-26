const Url = require('../models/url');

const addNewUrl = async (req, res) => {
    try {
        const { url } = req.body;

        const newUrl = new Url({
            url
        });

        const savedUrl = await newUrl.save();
        res.status(201).json({
            message: "Url added successfully!",
            Url: savedUrl
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding url",
            error: error.message
        });
    }
};

module.exports = { addNewUrl };
