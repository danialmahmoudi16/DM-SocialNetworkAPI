const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Set up port and app
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Routes
app.use(routes);

// Start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});