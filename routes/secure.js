
const express = require('express');
const authenticate = require('../middlewares/auth');
const rbac = require('../middlewares/rbac');

const router = express.Router();

// Public route
router.get('/public', (req, res) => {
  res.send('This is a public route.');
});

// Protected route (if any user is logged in)
router.get('/protected', authenticate, (req, res) => {
  res.send('This is a protected route.');
});

// Admin-only route
router.get('/admin', authenticate, rbac(['Admin']), (req, res) => {
  res.send('This is an Admin-only route.');
});

// Moderator route
router.get('/moderator', authenticate, rbac(['Moderator', 'Admin']), (req, res) => {
  res.send('This is a Moderator route.');
});

module.exports = router;
