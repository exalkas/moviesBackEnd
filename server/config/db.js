const mongoose = require('mongoose');
require('dotenv').config();//handles env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI , { 
        useNewUrlParser: true, //added useNewUrlParser to avoid deprecation warning
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;