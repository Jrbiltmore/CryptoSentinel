const mongoose = require('mongoose');
require('dotenv').config();

// Get the MongoDB URI from environment variables or use a default value
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cryptosentry';

// Function to connect to the MongoDB database
async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}

// Export the connectDB function
module.exports = connectDB;
