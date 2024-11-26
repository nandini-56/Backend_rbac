const Domain = require('../models/domain');

const addNewDomain = async (req, res) => {
    try {
        const { domainName } = req.body;

        const newDomain = new Domain({
            domainName
        });

        const savedDomain = await newDomain.save();
        res.status(201).json({
            message: "Domain added successfully!",
            domain: savedDomain
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding domain",
            error: error.message
        });
    }
};

module.exports = { addNewDomain };
