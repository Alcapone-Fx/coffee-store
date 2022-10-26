const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.MONGODB_CNN);
    console.log('DB Connection successful!!!');
  } catch (error) {
    console.log(error);
    throw new Error('Error on DB initialization.');
  }
};

module.exports = {
  dbConnection
};
