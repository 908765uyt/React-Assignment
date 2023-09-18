const express = require('express');
const router = express.Router();

// Sample user data (replace with your database logic)
let users = [];

// Create a new user
router.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: 'User created successfully', user });
});

// Get a list of users
router.get('/users', (req, res) => {
  res.json(users);
});

// Update a user by ID
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  // Find and update the user (replace with your database logic)
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = updatedUser;
    res.json({ message: 'User updated successfully', user: updatedUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  // Find and remove the user (replace with your database logic)
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
