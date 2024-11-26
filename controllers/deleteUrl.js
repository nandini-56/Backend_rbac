const Url = require('../models/url'); // Import your Domain model

// Delete domain based on the domainName field
const deleteUrl = async (req, res) => {
  try {
    const { url } = req.params; // Get the domainName from the request parameters

    // Find and delete the domain by its domainName
    const deletedUrl = await Url.findOneAndDelete({ url });

    // If no domain was found and deleted
    if (!deletedUrl) {
      return res.status(404).json({ message: `Url ${ url } not found` });
    }

    // Return success response
    res.status(200).json({ message: `Url ${ url } deleted successfully` });
  } catch (error) {
    // Return server error
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { deleteUrl };
