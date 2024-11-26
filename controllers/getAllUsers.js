const User = require('../models/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'username role');  
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching users.' });
  }
};

module.exports = { getAllUsers };
