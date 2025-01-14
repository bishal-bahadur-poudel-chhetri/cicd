"use strict";

require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
var users = [];

// API routes
app.get('/api/users', function (req, res) {
  try {
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err); // Debugging log
    res.status(500).json({
      message: 'Error fetching users'
    });
  }
});
app.post('/api/users', function (req, res) {
  var name = req.body.name;
  console.log('Received request to add user:', name); // Debugging log
  try {
    var newUser = {
      id: users.length + 1,
      name: name
    };
    users.push(newUser);
    console.log('Added user:', newUser); // Debugging log
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error adding user:', err); // Debugging log
    res.status(500).json({
      message: 'Error adding user'
    });
  }
});

// Server setup
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Server running on http://localhost:".concat(port));
});