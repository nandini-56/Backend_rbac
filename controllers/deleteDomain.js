const Domain = require('../models/domain'); // Import your Domain model

// Delete domain based on the domainName field
const deleteDomain = async (req, res) => {
  try {
    const { domainName } = req.params; // Get the domainName from the request parameters

    // Find and delete the domain by its domainName
    const deletedDomain = await Domain.findOneAndDelete({ domainName });

    // If no domain was found and deleted
    if (!deletedDomain) {
      return res.status(404).json({ message: `Domain ${domainName} not found` });
    }

    // Return success response
    res.status(200).json({ message: `Domain ${domainName} deleted successfully` });
  } catch (error) {
    // Return server error
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { deleteDomain };
