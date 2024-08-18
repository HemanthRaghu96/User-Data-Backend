const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

const PORT = process.env.PORT || 5000;
const app = express();
const userRoutes = require('./routers/user');

// Connect Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failure", error.message);
  }
};
connectDB()

// Middleware
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
