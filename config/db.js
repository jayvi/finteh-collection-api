const mongoose = require('mongoose');

const serverStatus = () => {
  return {
    state: 'up',
    dbState: mongoose.STATES[mongoose.connection.readyState],
  };
};

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo Connected MONGO_URI!!: ${connection.connection.host}`);
  } catch (error) {
    try {
      const connection = await mongoose.connect(process.env.MONGO_URI1, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      });
      console.log(
        `Mongo Connected to MONGO_URI1!!: ${connection.connection.host}`
      );
    } catch (error) {
      try {
        const connection = await mongoose.connect(process.env.MONGO_URI2, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
          useUnifiedTopology: true,
        });
        console.log(
          `Mongo Connected to MONGO_URI2!!: ${connection.connection.host}`
        );
      }catch(error){
        try {
          const connection = await mongoose.connect(process.env.MONGO_URI3, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
          });
          console.log(
            `Mongo Connected to MONGO_URI3!!: ${connection.connection.host}`
          );
        }catch(error){
          console.log(
            `All Mongo All  to MONGO_URI3!!: ${connection.connection.host}`
          );
        }
      }
      console.log(error);
    }
    //Bind connection to error event (to get notification of connection errors)
    //connection.on('error', console.error.bind(console, `MongoDB connection error:${error}`));
  }
  console.log('mongoStatus', serverStatus());
};

module.exports = connectDB;
