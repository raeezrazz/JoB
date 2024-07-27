// index.js (Express server)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/userRoute'); // Example route

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection (example with MongoDB)
mongoose.connect('mongodb://localhost:27017/mydatabase', {
 
});

// Routes
app.use('/', userRoute); // Example API route

// Serve React static files
// app.use(express.static(path.join(__dirname, 'client', 'build')));

// Serve React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
