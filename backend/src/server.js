require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
let users = [];

// API routes
app.get('/api/users', (req, res) => {
  try {
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err); // Debugging log
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  console.log('Received request to add user:', name); // Debugging log
  try {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    console.log('Added user:', newUser); // Debugging log
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error adding user:', err); // Debugging log
    res.status(500).json({ message: 'Error adding user' });
  }
});

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
