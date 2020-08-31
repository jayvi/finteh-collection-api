const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo Connected!!: ${connection.connection.host}`.green.bold);
  } catch (error) {
    console.log(error)
  }

};

module.exports = connectDB;