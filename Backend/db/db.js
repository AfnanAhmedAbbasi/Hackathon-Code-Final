require('dotenv').config();
const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_CONNECT,);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

module.exports = connectToDb;