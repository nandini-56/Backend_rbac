const Domain = require('../models/domain');

// Fetch all domains and manually fetch the user who added them
const getAllDomains = async (req, res) => {
  try {
    // Fetch all domains
    const domains = await Domain.find();

    if (domains.length === 0) {
      return res.status(404).json({ message: 'No domains found' });
    }

   
    res.status(200).json({ domains });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { getAllDomains };
