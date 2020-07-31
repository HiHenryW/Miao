import mongoose from 'mongoose';
import User from './user';
import Post from './post';
const URI = require('../config');

// console.log('URI: ', URI);
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL || URI, {
    useNewUrlParser: true,
  });
};

mongoose.connection.on('connected', () => {
  console.log('Established Mongoose Default Connection');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose Default Connection Error : ' + err);
});

const models = { User, Post };

export { connectDb };
export default models;
