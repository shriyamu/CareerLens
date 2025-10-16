const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // <-- REQUIRED: Mongoose module
require('dotenv').config();           // <-- REQUIRED: Loads variables from .env

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI; // <-- REQUIRED: Retrieves the Atlas connection string

// 1. MONGODB CONNECTION
mongoose.connect(URI)
    .then(() => console.log('MongoDB connection established successfully.'))
    // If connection fails, it will log an error but Express may still try to start
    .catch(err => console.log('MongoDB connection error:', err));
//


// Middlewares
app.use(cors());
app.use(express.json());

// API Endpoint for Frontend Test
app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the Express backend! Connection successful." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});