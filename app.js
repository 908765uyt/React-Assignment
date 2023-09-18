const express = require('express');
const app = express();
const cors = require('cors'); // Enable CORS if needed
const bodyParser = require('body-parser'); // For parsing JSON request bodies

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes
const routes = require('./routes');
app.use('/api', routes); // Prefix all routes with /api

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
