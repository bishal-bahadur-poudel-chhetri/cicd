require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { 
  serverSelectionTimeoutMS: 5000 // Set the timeout to 5 seconds (or higher)
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a User schema and model
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema, 'user');

// API routes
app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      console.log('Fetched users:', users); // Debugging log
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err); // Debugging log
      res.status(500).json({ message: 'Error fetching users' });
    }
  });
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  });

  
  app.post('/api/users', async (req, res) => {
    const { name } = req.body;
    console.log('Received request to add user:', name); // Debugging log
    try {
      const newUser = new User({ name });
      await newUser.save();
      console.log('Added user:', newUser); // Debugging log
      res.status(201).json(newUser);
    } catch (err) {
      console.error('Error adding user:', err); // Debugging log
      res.status(500).json({ message: 'Error adding user' });
    }
  });
  

// Server setup
const port = process.env.PORT || 5000;
process.env.MONGO_URI
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
