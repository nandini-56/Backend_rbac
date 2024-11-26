const Url = require('../models/url');

// Fetch all domains and manually fetch the user who added them
const getAllUrls = async (req, res) => {
  try {
    // Fetch all domains
    const urls = await Url.find();

    if (urls.length === 0) {
      return res.status(404).json({ message: 'No Urls found' });
    }

   
    res.status(200).json({ urls });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { getAllUrls };
